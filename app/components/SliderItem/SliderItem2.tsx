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

const SliderItem2 = ({
  id,
  modelName,
  bodyType,
  modelType,
  imageUrl,
}: Props) => {
  return (
    <div
      id={id}
      className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      style={{ backfaceVisibility: 'hidden' }}
    >
      <Image
        width={800}
        height={600}
        src={imageUrl}
        className="block w-full sm:w-[200px] sm:h-[180px] md:w-[300px] md:h-[225px] object-contain "
        alt={modelName}
      />
    </div>
  );
};

export default SliderItem2;
