"use client";
import React, { useEffect } from "react";
import { CarInfo } from "typings";
import { motion, useAnimation } from "framer-motion";
type Props = {
  data: CarInfo[];
  onClick: (index: number) => void;
  currentValue: number;
  position: number;
};

const Indicators = ({ data, position }: Props) => {
  return (
    <div
      id="indicators"
      className="absolute bottom-0 flex w-full justify-center gap-2 pt-10 "
    >
      {data.map((image, index: number) => (
        <motion.div
          key={index}
          className={`${
            position === index
              ? "h-3 w-3 rounded-lg bg-black transition duration-500 ease-in-out "
              : "h-3 w-3 rounded-lg bg-slate-300 transition duration-500 ease-in-out  "
          } flex-col `}
        ></motion.div>
      ))}
    </div>
  );
};

export default Indicators;
