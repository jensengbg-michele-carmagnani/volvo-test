import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/solid';

type Props = {
  onPrevClick: any;
  onNextClick: any;
};

const CustomControls = ({ onNextClick, onPrevClick }: Props) => {
  return (
    <div className="absolute bottom-0 right-0 ">
      <button onClick={onPrevClick}>
        <ChevronDoubleLeftIcon />
      </button>
      <button onClick={onNextClick}>
        <ChevronDoubleRightIcon />
      </button>
    </div>
  );
};

export default CustomControls;
