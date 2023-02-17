import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Slider from './Slider';

type Props = {};

const HomePage = async (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center text-4xl text-black h-screen">
      <Slider />
    </div>
  );
};

export default HomePage;
