import Image from 'next/image';
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Click } from 'vcc-ui';
import Link from 'next/link';
type Props = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

const SliderItem = ({
  id,
  modelName,
  bodyType,
  modelType,
  imageUrl,
}: Props) => {
  return (
    <div className="text-base md:text-lg relative mx-6 md:mx-0 ">
      <div className="pb-3">
        <span className="text-gray-400 font-normal">{bodyType}</span>
        <div className="flex flex-col">
          <p className="flex">
            <span className="pr-1">{modelName}</span>{' '}
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
        className="sm:w-[200px] sm:h-[180px] md:w-[300px] md:h-[225px] object-contain "
        alt={modelName}
      />

      <div className="space-x-4 md:space-x-4 pt-8 flex justify-center capitalize text-[#3A70B7] font-semibold text-lg md:text-sm">
        <Link href={`${id}/learn`} className="text-decoration-none">
          <Click className="flex justify-center items-center ">
            <div className="flex justify-center items-center hover:text-[#3A70B7]/80 transition-all duration-150">
              <span className="tracking-wide pr-2">LEARN</span>{' '}
              <ChevronRightIcon className="h-5 w-5" />
            </div>
          </Click>
        </Link>

        <Link href={`${id}/shop`} className="text-decoration-none">
          <Click className="flex justify-center items-center  ">
            <div className="flex justify-center items-center hover:text-[#3A70B7]/80 transition-all duration-150">
              <span className="tracking-wide pr-2">SHOP</span>{' '}
              <ChevronRightIcon className="h-5 w-5  " />
            </div>
          </Click>
        </Link>
      </div>
    </div>
  );
};

export default SliderItem;
