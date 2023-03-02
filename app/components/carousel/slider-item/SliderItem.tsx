"use client";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Click } from "vcc-ui";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
  index: number;
  position: number;
  id: string;
};

const SliderItem = ({
  modelName,
  bodyType,
  modelType,
  imageUrl,
  index,
  position,
  id,
}: Props) => {
  return (
    <motion.div
      id="container"
      className=" text-base text-left absolute left-5 overflow-hidden flex flex-col justify-center items-center w-[300px] h-[400px] "
      initial={{ x: `${index * 320 + 8}px` }}
      transition={{ type: "spring", stiffness: 100 }}
      animate={{ left: `${index - position * 321}px` }}
    >
      <div className="pb-3 text-left">
        <span className="text-gray-400 font-normal">{bodyType}</span>
        <div className="flex flex-col">
          <p className="flex">
            <span className="pr-1">{modelName}</span>{" "}
            <span className="hidden md:block text-gray-400 font-light">
              {modelType}
            </span>
          </p>
          <p className="text-gray-400 font-light md:hidden">{modelType}</p>
        </div>
      </div>
      <Image
        width={800}
        height={600}
        src={imageUrl}
        className=" w-[300px]  object-fill "
        alt={modelName}
      />

      <div className="space-x-4 md:space-x-4 pt-8 flex justify-center capitalize text-[#3A70B7] font-semibold text-lg md:text-sm">
        <Link href={`${id}/learn`} className="text-decoration-none">
          <Click className="flex justify-center items-center ">
            <div className="flex justify-center items-center hover:text-[#3A70B7]/80 transition-all duration-150">
              <span className="tracking-wide pr-2">LEARN</span>{" "}
              <ChevronRightIcon className="h-5 w-5" />
            </div>
          </Click>
        </Link>

        <Link href={`${id}/shop`} className="text-decoration-none">
          <Click className="flex justify-center items-center  ">
            <div className="flex justify-center items-center hover:text-[#3A70B7]/80 transition-all duration-150">
              <span className="tracking-wide pr-2">SHOP</span>{" "}
              <ChevronRightIcon className="h-5 w-5  " />
            </div>
          </Click>
        </Link>
      </div>
    </motion.div>
  );
};

export default SliderItem;
