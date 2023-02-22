'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { CarInfo } from 'typings';
import CardItem from '../SliderItem/SliderItem';
import SliderItem from '../SliderItem/SliderItem';

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
  const handleScroll = () => {
    setCurrentIndex(window.scrollX);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(currentIndex);
  return (
    <div
      onScroll={handleScroll}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center xl:px-10 space-y-6 "
    >
      <div
        // onScroll={handleOnNextClicked}
        className="w-full  flex space-x-5 overflow-x-scroll  snap-x snap-mandatory scrollbar-none "
      >
        {data2.map((carItem, index) => (
          <div
            id={`item${index}`}
            key={carItem.id}
            className="flex flex-col items-center md:space-y-7 flex-shrink-0 w-[250px] md:w-[600px] xl:w-[900px] snap-start  duration-200 overflow-hidden "
          >
            <SliderItem
              id={carItem.id}
              modelName={carItem.modelName}
              bodyType={carItem.bodyType}
              imageUrl={carItem.imageUrl}
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
      <div className="flex justify-center w-full py-2 gap-2 md:hidden">
        {data2.map((carItem, index) => (
          <a
            key={carItem.id}
            href={`#item${index}`}
            className={`${
              currentIndex === index
                ? 'bg-black h-3 w-3 rounded-lg'
                : 'h-3 w-3 bg-slate-400/20 rounded-lg '
            } `}
            onClick={() => setCurrentIndex(index)}
          ></a>
        ))}
      </div>
    </div>
  );
};

export default Slider;
