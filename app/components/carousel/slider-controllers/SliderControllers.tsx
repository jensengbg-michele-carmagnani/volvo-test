import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { CarInfo } from "typings";

type Props = {
  currentValue: number;
  handleScrollNext: (slideItemNumber: number) => void;
  handleScrollPrev: (slideItemNumber: number) => void;
  data: CarInfo[];
};

const SliderControllers = ({
  currentValue,
  data,
  handleScrollNext,
  handleScrollPrev,
}: Props) => {
  return (
    <div className="hidden md:flex items-center justify-end w-full pt-10 space-x-2 cursor-pointer ">
      <button
        className="disabled:opacity-10"
        disabled={currentValue === 0 || data.length - 1 <= 3}
        onClick={() => handleScrollPrev(currentValue - 1)}
      >
        <a href={`#item${currentValue}`}>
          <div className="">
            <ChevronLeftIcon className="h-10 w-10 border border-1 p-1 rounded-full" />
          </div>
        </a>
      </button>
      <button
        className="disabled:opacity-10 "
        onClick={() => handleScrollNext(currentValue + 1)}
        disabled={currentValue + 3 === data.length - 1 || data.length - 1 <= 3}
      >
        <a href={`#item${currentValue + 3}`}>
          <div>
            <ChevronRightIcon className="h-10 w-10 border border-1 p-1 rounded-full" />
          </div>
        </a>
      </button>
    </div>
  );
};

export default SliderControllers;
