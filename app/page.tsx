import React from 'react';
import path from 'path';
import { promises as fs } from 'fs';

import Slider from './components/Slider/Slider';
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
    <div className="flex flex-col justify-center items-center text-4xl text-black h-screen relative overflow-hidden">
      <Slider data={data.chunkedArray} data2={data.carsArray} />
    </div>
  );
};

export default HomePage;
