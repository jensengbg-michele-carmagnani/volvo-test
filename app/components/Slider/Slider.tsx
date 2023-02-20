'use client';

import Image from 'next/image';
import Link from 'next/link';
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
      <div className="carousel carousel-start max-w-sm p-4 space-x-2 bg-none rounded-box">
        {data2.map((carItem) => (
          <div key={carItem.id} className="carousel-item ">
            <Image
              id={`item${index}`}
              width={800}
              height={600}
              src={carItem.imageUrl}
              className=""
              alt={carItem.modelName}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {data2.map((carItem, index) => (
          <Link key={carItem.id} href={`#item${index}`} className="btn btn-xs">
            {index + 1}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Slider;
