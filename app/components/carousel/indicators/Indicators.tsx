'use client';
import React, { useEffect } from 'react';
import { CarInfo } from 'typings';
import { motion, useAnimation } from 'framer-motion';
type Props = {
  data: CarInfo[];
  onClick: (index: number) => void;
  currentValue: number;
};

const Indicators = ({ data, onClick, currentValue }: Props) => {
  const control = useAnimation();

  return (
    <div className="flex justify-center w-full pt-10 gap-2 md:hidden">
      {data.map((carItem, index) => (
        <motion.a
          onClick={() => onClick(index)}
          key={carItem.id}
          href={`#item${index}`}
          animate={control}
          className={`${
            currentValue === index
              ? 'bg-black h-3 w-3 rounded-lg'
              : 'h-3 w-3 bg-slate-400/20 rounded-lg '
          } `}
        ></motion.a>
      ))}
    </div>
  );
};

export default Indicators;
