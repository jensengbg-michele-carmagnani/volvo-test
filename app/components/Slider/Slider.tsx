'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { CarInfo } from 'typings';
import CardItem from '../SliderItem/SliderItem';
import SliderItem2 from '../SliderItem/SliderItem2';

type Props = {
  data: CarInfo[][];
  data2: CarInfo[];
};
let count = 0;

const Slider = ({ data, data2 }: Props) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handleOnNextClicked = () => {
  //   count = (currentIndex + 1) % data2.length;
  //   setCurrentIndex(count);
  //   router.push(`/#item${count}`);
  // };
  // const handleOnPrevClicked = () => {
  //   const carsArrayLength = data2.length;
  //   count = (currentIndex + carsArrayLength - 1) % carsArrayLength;
  //   setCurrentIndex(count);
  // };
  // const handleAutoPlay = () => {
  //   const interval = setInterval(() => {
  //     handleOnNextClicked();
  //   }, 3000);
  // };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setCurrentIndex(window.scrollX);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  console.log(currentIndex);
  return (
    <div className="relative">
      <div
        // onScroll={handleOnNextClicked}
        className="carousel carousel-start p-4 space-x-4 max-w-sm"
      >
        {data2.map((carItem, index) => (
          <div id={`item${index}`} key={carItem.id} className="carousel-item ">
            <Image
              width={800}
              height={600}
              src={carItem.imageUrl}
              className=""
              alt={carItem.modelName}
            />
            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 carousel-item">
              <a
                href={`#item${index - 1}`}
                className="btn btn-circle"
                onClick={() => setCurrentIndex(index)}
              >
                ❮
              </a>
              <a
                href={`#item${index + 1}`}
                className="btn btn-circle"
                onClick={() => setCurrentIndex(index)}
              >
                ❯
              </a>
            </div> */}
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {data2.map((carItem, index) => (
          <a
            key={carItem.id}
            href={`#item${index}`}
            className={`${
              currentIndex === index
                ? 'bg-black h-3 w-3 rounded-lg'
                : 'h-3 w-3 bg-slate-400/20 rounded-lg'
            } `}
            onClick={() => setCurrentIndex(index)}
          ></a>
        ))}
      </div>
    </div>
  );
};

export default Slider;
