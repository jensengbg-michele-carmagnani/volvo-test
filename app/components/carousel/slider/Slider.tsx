'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, motion } from 'framer-motion';
import { CarInfo } from 'typings';
import SliderItem from '../slider-item/SliderItem';

import Indicators from '../indicators/Indicators';
import SliderControllers from '../slider-controllers/SliderControllers';
import { filterByBodyType } from 'helpers/filterBodyType';
import ModelType from '../model-type/ModelType';

type Props = {
  dataCar: CarInfo[];
};

const Slider = ({ dataCar }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredBodyType, setFilteredBodyType] = useState<CarInfo[]>([]);
  const [data, setData] = useState<CarInfo[]>(dataCar);

  {
    /*framer*/
  }
  const refSlide = useRef(null);
  const { scrollXProgress } = useScroll({ container: refSlide });

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
    setCurrentIndex(0);
  }, []);

  const handleOnClickFilterBody = (bodyType: string) => {
    const filteredCar: CarInfo[] = dataCar.filter(
      (car) => car.bodyType === bodyType
    );
    setData(filteredCar);
  };

  return (
    <>
      <motion.div
        style={{ scaleX: scrollXProgress }}
        className="bg-blue-500 h-1 fixed inset-0 origin-[0%]"
      />
      <ModelType
        setCurrentIndex={setCurrentIndex}
        dataCar={dataCar}
        filteredCar={filteredBodyType}
        setData={setData}
        handleOnClickFilterBody={handleOnClickFilterBody}
      />
      <div
        className={`flex flex-col relative overflow-hidden max-w-sm 
        md:max-w-6xl pl-8 justify-evenly mx-auto items-center xl:px-10`}
      >
        <div
          className={`relative w-full flex space-x-5 overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollbar-none duration-150 cursor-pointer`}
          ref={refSlide}
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
