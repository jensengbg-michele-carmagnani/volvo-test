'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from 'flowbite-react';

import { CarInfo } from 'typings';
import CardItem from '../SliderItem/SliderItem';
import SliderItem2 from '../SliderItem/SliderItem2';

type Props = {
  data: CarInfo[][];
  data2: CarInfo[];
};

const Slider = ({ data, data2 }: Props) => {
  const refControl = useRef<any>(null);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel
          className="h-[300px] w-[300px]"
          ref={refControl}
          indicators={false}
          interval={null}
        >
          <Image
            width={500}
            height={500}
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <Image
            width={500}
            height={500}
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <Image
            width={500}
            height={500}
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <Image
            width={500}
            height={500}
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <Image
            width={500}
            height={500}
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
