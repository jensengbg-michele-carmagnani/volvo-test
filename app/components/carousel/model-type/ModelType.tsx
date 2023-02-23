import Button from '@/components/ui/spinner/button/Button';
import { CarInfo } from 'typings';

type Props = {
  dataCar: CarInfo[];
  filteredCar: CarInfo[];
  setData: (data: CarInfo[]) => void;
  handleOnClickFilterBody: (bodyType: string) => void;
};
const ModelType = ({
  filteredCar,
  handleOnClickFilterBody,
  setData,
  dataCar,
}: Props) => {
  return (
    <section className="space-y-10 pb-14 md:pb-32 ">
      <div className="text-4xl font-semibold text-center">Our Model</div>
      <div className="flex space-x-4 text-lg font-light text-gray-500">
        {filteredCar.map((carItem: CarInfo) => (
          <Button
            key={carItem.id}
            onClick={() => handleOnClickFilterBody(carItem.bodyType)}
          >
            <span className="underline">{carItem.bodyType}</span>
          </Button>
        ))}
        <Button onClick={() => setData(dataCar)} className="">
          <span className="underline">All({dataCar.length})</span>
        </Button>
      </div>
    </section>
  );
};

export default ModelType;
