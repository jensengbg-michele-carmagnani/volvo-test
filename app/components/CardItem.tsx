import Image from 'next/image';
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Block, Button, Click, Flex } from 'vcc-ui';
import Link from 'next/link';
type Props = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

const CardItem = ({ id, modelName, bodyType, modelType, imageUrl }: Props) => {
  return (
    <div className="md:text-lg relative">
      <div className=" space-y-5">
        <span className="text-gray-400 font-light">{bodyType}</span>
        <div className="">
          <span className="">{modelName}-</span>{' '}
          <span className="text-gray-400 font-light">{modelType}</span>
        </div>
      </div>
      <Image
        width={940}
        height={725}
        src={imageUrl}
        className="md:w-[300px] md:h-[300px] object-contain "
        alt={modelName}
      />

      <div className="space-x-10 pt-8 flex justify-center capitalize text-[#3A70B7] font-semibold">
        <Link href={`${id}/learn`} className="text-decoration-none">
          <Click className="flex justify-center items-center text-lg ">
            <div className="flex justify-center items-center hover:text-[#3A70B7]/80 transition-all duration-150">
              <span className="tracking-wide pr-2">LEARN</span>{' '}
              <ChevronRightIcon className="h-5 w-5" />
            </div>
          </Click>
        </Link>

        <Link href={`${id}/shop`} className="text-decoration-none">
          <Click className="flex justify-center items-center md:text-lg ">
            <div className="flex justify-center items-center hover:text-[#3A70B7]/80 transition-all duration-150">
              <span className="tra1cking-wide pr-2">SHOP</span>{' '}
              <ChevronRightIcon className="h-5 w-5  " />
            </div>
          </Click>
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
