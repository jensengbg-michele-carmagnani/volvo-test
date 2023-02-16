import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import CarouselCars from './Carousel';

type Props = {};

const HomePage = async (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center text-4xl text-black h-screen">
      <h1>home</h1>
      <CarouselCars />
    </div>
  );
};

export default HomePage;
