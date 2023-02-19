'use client';

import { useEffect, useRef, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { CarInfo } from 'typings';
import CardItem from '../SliderItem/SliderItem';

type Props = {
  data: CarInfo[][];
  data2: CarInfo[];
};

const Slider = ({ data, data2 }: Props) => {
  const refControl = useRef<any>(null);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="flex sm:hidden md:hidden">
        {data2 && (
          <Carousel
            variant="dark"
            activeIndex={index}
            onSelect={handleSelect}
            wrap={true}
            controls={false}
            indicators={true}
            interval={5000}
          >
            {data2.map((car: CarInfo) => (
              <Carousel.Item key={car.id} className="">
                <CardItem
                  key={car.id}
                  id={car.id}
                  modelName={car.modelName}
                  bodyType={car.bodyType}
                  modelType={car.modelType}
                  imageUrl={car.imageUrl}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
      <div className="hidden sm:flex  md:flex relative">
        {data && (
          <Carousel
            ref={refControl}
            variant="dark"
            activeIndex={index}
            onSelect={handleSelect}
            wrap={true}
            controls={true}
            indicators={false}
            interval={5000}
          >
            {data.map((chuckedArray: CarInfo[], index: number) => (
              <Carousel.Item key={index} className="">
                <div className=" grid sm:grid-cols-2 md:grid-cols-4 gap-4  sm:w-full overflow-y-hidden">
                  {chuckedArray.map((car: CarInfo) => (
                    <CardItem
                      key={car.id}
                      id={car.id}
                      modelName={car.modelName}
                      bodyType={car.bodyType}
                      modelType={car.modelType}
                      imageUrl={car.imageUrl}
                    />
                  ))}
                </div>
              </Carousel.Item>
            ))}
            {/* custom controllers */}
          </Carousel>
        )}
      </div>
    </>
  );
};

export default Slider;
