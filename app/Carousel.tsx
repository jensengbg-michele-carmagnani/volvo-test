'use client';

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import useSWR from 'swr';
import { CarInfo } from 'typings';
import CarItem from './components/CarItem';
type Props = {};
const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => JSON.parse(data));

const CarouselCars = (props: Props) => {
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
          fade
          variant="dark"
          activeIndex={index}
          onSelect={handleSelect}
          wrap={true}
          controls={true}
          indicators={false}
        >
          {data?.map((car: CarInfo, index: number) => (
            <Carousel.Item
              className=""
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
              }}
            >
              {/* <span aria-hidden="true" className="carousel-control-prev-icon" /> */}

              <CarItem
                key={car.id}
                id={car.id}
                modelName={car.modelName}
                bodyType={car.bodyType}
                modelType={car.modelType}
                imageUrl={car.imageUrl}
              />

              {/* <span aria-hidden="true" className={css["carousel-control-next-icon"]} /> */}
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default CarouselCars;
