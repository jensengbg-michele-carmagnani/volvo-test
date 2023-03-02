import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { CarInfo } from "typings";
("use state");

type Props = {
  onNext: () => void;
  onPrev: () => void;
  position: number;
  data: CarInfo[];
};

const SliderControllers = ({ onNext, onPrev, position, data }: Props) => {
  return (
    <div className=" hidden self-start max-w-[120px]  md:flex pr-1 ">
      <div className="flex w-screen items-center justify-between rounded-full  ">
        <button
          onClick={onPrev}
          className={`${position === 0 ? "cursor-not-allowed opacity-40" : ""}`}
        >
          <ChevronLeftIcon className=" h-12 w-12 rounded-full border-gray-500 border text-gray-500 transition-all duration-100 hover:scale-105 " />
        </button>
        <button
          className={`${
            position + 3 === data.length - 1
              ? "cursor-not-allowed opacity-40"
              : ""
          }`}
          onClick={onNext}
        >
          <ChevronRightIcon className=" h-12 w-12 rounded-full border-gray-500 border text-gray-500 transition-all duration-100 hover:opacity-80 hover:scale-105 " />
        </button>
      </div>
    </div>
  );
};

export default SliderControllers;
