import React from 'react';
import path from 'path';
import { promises as fs } from 'fs';

import Slider from './components/carousel/slider/Slider';
import { chunksArray } from '../helpers/chunksArray';

type Props = {};
const getCars = async () => {
  const jsonDirectory = path.join(process.cwd(), 'public/api');
  const data = await fs.readFile(jsonDirectory + '/cars.json', 'utf8');
  const carsArray = JSON.parse(data);
  const chunkedArray = chunksArray(carsArray, 4);
  return { chunkedArray, carsArray };
};

const HomePage = async (props: Props) => {
  const data = await getCars();
  return (
    <>
      <div className="flex flex-col justify-center h-screen items-center text-4xl  text-black  relative overflow-hidden">
        <Slider dataCar={data.carsArray} />
      </div>
    </>
  );
};

export default HomePage;
