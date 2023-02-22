'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { CarInfo } from 'typings';
import SliderItem from '../SliderItem/SliderItem';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type Props = {
  data: CarInfo[][];
  data2: CarInfo[];
};

const Slider = ({ data, data2 }: Props) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollNext = (slideItemNumber: number) => {
    if (slideItemNumber + 3 === data2.length - 1) {
      setCurrentIndex(data2.length - 1);
    }
    setCurrentIndex(slideItemNumber);
  };
  const handleScrollPrev = (slideItemNumber: number) => {
    if (slideItemNumber === 0) setCurrentIndex(0);
    else setCurrentIndex(slideItemNumber);
  };

  console.log('currenIndex', currentIndex);
  return (
    <div
      className={`flex flex-col relative overflow-hidden  max-w-sm   md:max-w-6xl px-10 justify-evenly mx-auto items-center xl:px-10`}
    >
      <div
        // onScroll={handleOnNextClicked}
        className={`relative w-full flex space-x-5 overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollbar-none duration-150 cursor-pointer`}
      >
        {data2.map((carItem, index) => (
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
      <div className="flex justify-center w-full pt-10 gap-2 md:hidden">
        {data2.map((carItem, index) => (
          <a
            onClick={() => setCurrentIndex(index)}
            key={carItem.id}
            href={`#item${index}`}
            className={`${
              currentIndex === index
                ? 'bg-black h-3 w-3 rounded-lg'
                : 'h-3 w-3 bg-slate-400/20 rounded-lg '
            } `}
          ></a>
        ))}
      </div>
      {/* desktop index controller */}
      <div className="hidden md:flex items-center justify-end w-full pt-10 space-x-2 cursor-pointer ">
        <button
          className="disabled:opacity-10"
          disabled={currentIndex === 0}
          onClick={() => handleScrollPrev(currentIndex - 1)}
        >
          <a href={`#item${currentIndex}`}>
            <div className="">
              <ChevronLeftIcon className="h-10 w-10 border border-1 p-1 rounded-full" />
            </div>
          </a>
        </button>
        <button
          className="disabled:opacity-10"
          onClick={() => handleScrollNext(currentIndex + 1)}
          disabled={currentIndex + 3 === data2.length - 1}
        >
          <a href={`#item${currentIndex + 3}`}>
            <div>
              <ChevronRightIcon className="h-10 w-10 border border-1 p-1 rounded-full" />
            </div>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Slider;
