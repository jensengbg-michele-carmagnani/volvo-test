"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";
import { CarInfo } from "typings";
import SliderItem from "../slider-item/SliderItem";

import Indicators from "../indicators/Indicators";
import SliderControllers from "../slider-controllers/SliderControllers";
import { filterByBodyType } from "helpers/filterBodyType";
import ModelType from "../model-type/ModelType";

type Props = {
  dataCar: CarInfo[];
};

const Slider = ({ dataCar }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredBodyType, setFilteredBodyType] = useState<CarInfo[]>([]);
  const [data, setData] = useState<CarInfo[]>(dataCar);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [position, setPosition] = useState(0);

  const onNext = () => {
    console.log(position);
    console.log(data.length - 1);
    if (position + 3 !== data.length - 1) {
      setPosition(position + 1);
    }
  };
  const onPrev = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };
  const refSlide = useRef(null);
  const { scrollXProgress } = useScroll({ container: refSlide });

  useEffect(() => {
    filterByBodyType(data);
    const filteredCar: CarInfo[] = filterByBodyType(data);
    setFilteredBodyType(filteredCar);
    setCurrentIndex(0);
  }, [data]);

  const handleOnClickFilterBody = (bodyType: string) => {
    const filteredCar: CarInfo[] = dataCar.filter(
      (car) => car.bodyType === bodyType
    );
    setData(filteredCar);
  };

  return (
    <div
      id="carousel"
      className=" relative h-full bg-violet-300 flex flex-col justify-center items-center w-[1280px]"
    >
      <motion.div
        style={{ scaleX: scrollXProgress }}
        className="bg-blue-500 h-1 fixed inset-0 origin-[0%]"
      />
      <ModelType
        setCurrentIndex={setCurrentIndex}
        dataCar={dataCar}
        filteredCar={filteredBodyType}
        setData={setData}
        handleOnClickFilterBody={handleOnClickFilterBody}
      />
      <div
        id="row"
        className={`relative overflow-hidden min-w-5xl boder border-2 bg-green-300 flex h-[400px] w-full`}
      >
        {data.map((carItem: CarInfo, index) => (
          <SliderItem
            key={carItem.id}
            id={carItem.id}
            position={position}
            index={index}
            modelName={carItem.modelName}
            bodyType={carItem.bodyType}
            imageUrl={carItem.imageUrl}
            modelType={carItem.modelType}
          />
        ))}
      </div>

      {/* mobile index indicators */}
      <Indicators
        data={data}
        onClick={setCurrentIndex}
        currentValue={currentIndex}
      />
      {/* desktop index controller */}
      <SliderControllers
        onNext={onNext}
        onPrev={onPrev}
        data={data}
        position={position}
      />
    </div>
  );
};

export default Slider;
