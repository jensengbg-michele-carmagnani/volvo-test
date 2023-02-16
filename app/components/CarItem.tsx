import Image from 'next/image';
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Block, Button } from 'vcc-ui';
type Props = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};
const LearnDetailsHandler = (id: string) => {
  console.log(id);
};
const ShopDetailsHandler = (id: string) => {
  console.log(id);
};
const CarItem = ({ id, modelName, bodyType, modelType, imageUrl }: Props) => {
  return (
    <div
      className="card"
      style={{
        maxWidth: '28rem',
        border: '0',
        padding: '1rem',
      }}
    >
      <span className="">{bodyType}</span>
      <div className="">
        <span className="">{modelName}-</span> <span>{modelType}</span>
      </div>
      <Image
        width={200}
        height={200}
        src={imageUrl}
        className="card-img-top"
        alt={`../../public/${modelName}`}
      />

      <div className="space-x-10 pt-8 flex justify-center ">
        <button onClick={() => LearnDetailsHandler(id)}>
          {' '}
          Learn <span></span>{' '}
        </button>
        <Block extend={{ padding: 20 }}>
          <Button className="flex" onClick={() => ShopDetailsHandler(id)}>
            Shop <ChevronRightIcon className="h-7 w-7" />
          </Button>
        </Block>
      </div>

      {/* </Link> */}
    </div>
  );
};

export default CarItem;
