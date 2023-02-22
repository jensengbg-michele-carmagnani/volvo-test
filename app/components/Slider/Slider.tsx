'use client';

import { motion, useScroll } from 'framer-motion';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { CarInfo } from 'typings';
import SliderItem from '../slider-item/SliderItem';

import Indicators from '../indicators/Indicators';
import SliderControllers from '../slider-controllers/SliderControllers';
import { filterByBodyType } from 'helpers/filterBodyType';
import Button from '../ui/spinner/button/Button';

type Props = {
  dataCar: CarInfo[];
};

const Slider = ({ dataCar }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredBodyType, setFilteredBodyType] = useState<CarInfo[]>([]);
  const [data, setData] = useState<CarInfo[]>(dataCar);

  const handleScrollNext = (slideItemNumber: number) => {
    if (slideItemNumber + 3 === data.length - 1) {
      setCurrentIndex(data.length - 1);
    }
    setCurrentIndex(slideItemNumber);
  };
  const handleScrollPrev = (slideItemNumber: number) => {
    if (slideItemNumber === 0) setCurrentIndex(0);
    else setCurrentIndex(slideItemNumber);
  };

  useEffect(() => {
    filterByBodyType(data);
    const filteredCar: CarInfo[] = filterByBodyType(data);
    setFilteredBodyType(filteredCar);
  }, []);

  const handleOnFilterBody = (bodyType: string) => {
    const filteredCar: CarInfo[] = dataCar.filter(
      (car) => car.bodyType === bodyType
    );
    setData(filteredCar);
  };

  return (
    <>
      <section className="space-y-10 pb-32 ">
        <div className="text-4xl font-semibold text-center">Our Model</div>
        <div className="flex space-x-4 text-lg font-light text-gray-500">
          {filteredBodyType.map((carItem: CarInfo) => (
            <Button
              key={carItem.id}
              onClick={() => handleOnFilterBody(carItem.bodyType)}
            >
              <span className="underline">{carItem.bodyType}</span>
            </Button>
          ))}
          <Button onClick={() => setData(dataCar)} className="">
            <span className="underline">All({dataCar.length})</span>
          </Button>
        </div>
      </section>

      <div
        className={`flex flex-col relative overflow-hidden  max-w-sm md:max-w-6xl px-10 justify-evenly mx-auto items-center xl:px-10`}
      >
        <div
          // onScroll={handleOnNextClicked}
          className={`relative w-full flex space-x-5 overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollbar-none duration-150 cursor-pointer`}
        >
          {data.map((carItem: CarInfo, index) => (
            <div
              id={`item${index}`}
              key={carItem.id}
              className="flex flex-col items-center flex-shrink-0 w-[250px] snap-start duration-200 overflow-hidden "
            >
              <SliderItem
                id={carItem.id}
                modelName={carItem.modelName}
                bodyType={carItem.bodyType}
                imageUrl={carItem.imageUrl}
                modelType={carItem.modelType}
              />
            </div>
          ))}
        </div>

        {/* mobile index indicators */}
        <Indicators
          data={data}
          onClick={setCurrentIndex}
          currentValue={currentIndex}
        />

        {/* desktop index controller */}

        <SliderControllers
          currentValue={currentIndex}
          data={data}
          handleScrollNext={handleScrollNext}
          handleScrollPrev={handleScrollPrev}
        />
      </div>
    </>
  );
};

export default Slider;
