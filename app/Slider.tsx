'use client';

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import useSWR from 'swr';
import { CarInfo } from 'typings';
import CarItem from './components/CardItem';
import '../styles/SliderIndicator.css';

type Props = {};
const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => JSON.parse(data));

const Slider = (props: Props) => {
  const { data, error } = useSWR('/api/staticdata', fetcher);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  console.log(data);

  return (
    <>
      {data && (
        <Carousel
          variant="dark"
          activeIndex={index}
          onSelect={handleSelect}
          wrap={true}
          controls={true}
          indicators={false}
          interval={5000}
        >
          {data?.map((car: CarInfo, index: number) => (
            <Carousel.Item key={index} className="">
              <div className=" grid grid-cols-4 gap-4 mx-5 ">
                <CarItem
                  key={car.id}
                  id={car.id}
                  modelName={car.modelName}
                  bodyType={car.bodyType}
                  modelType={car.modelType}
                  imageUrl={car.imageUrl}
                />
                <CarItem
                  key={car.id}
                  id={car.id}
                  modelName={car.modelName}
                  bodyType={car.bodyType}
                  modelType={car.modelType}
                  imageUrl={car.imageUrl}
                />
                <CarItem
                  key={car.id}
                  id={car.id}
                  modelName={car.modelName}
                  bodyType={car.bodyType}
                  modelType={car.modelType}
                  imageUrl={car.imageUrl}
                />
                <CarItem
                  key={car.id}
                  id={car.id}
                  modelName={car.modelName}
                  bodyType={car.bodyType}
                  modelType={car.modelType}
                  imageUrl={car.imageUrl}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default Slider;
