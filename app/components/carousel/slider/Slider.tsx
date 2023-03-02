"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";
import { CarInfo } from "typings";
import SliderItem from "../slider-item/SliderItem";

import Indicators from "../indicators/Indicators";
import SliderControllers from "../slider-controllers/SliderControllers";
import { filterByBodyType } from "helpers/filterBodyType";
import ModelType from "../model-type/ModelType";
import { useSwipeable } from "react-swipeable";

type Props = {
  dataCar: CarInfo[];
};

const Slider = ({ dataCar }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredBodyType, setFilteredBodyType] = useState<CarInfo[]>([]);
  const [data, setData] = useState<CarInfo[]>(dataCar);
  const [width, setWidth] = useState({ innerWidth: 0 });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [position, setPosition] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => onNext(),
    onSwipedRight: () => onPrev(),
    swipeDuration: 200,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const onNext = () => {
    console.log(position);
    console.log(data.length - 1);

    if (width.innerWidth < 500) {
      if (position + 1 !== data.length - 1) {
        setPosition(position + 1);
      }
    }
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
    setWidth({ innerWidth: window.innerWidth });
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
      className="pl-6 py-10 md:pl-0 relative  flex flex-col justify-center items-center md:w-[1280px] w-[400px] overflow-hidden "
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
        {...handlers}
        id="row"
        className={`relative overflow-hidden min-w-5xl flex h-[400px]  w-full`}
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
      <SliderControllers
        onNext={onNext}
        onPrev={onPrev}
        data={data}
        position={position}
      />
      <Indicators
        position={position}
        data={data}
        onClick={setCurrentIndex}
        currentValue={currentIndex}
      />
      {/* desktop index controller */}
    </div>
  );
};

export default Slider;
