import { CarInfo } from 'typings';

export const filterByBodyType = (data: CarInfo[]) => {
  const newArray: CarInfo[] = data.filter(
    (car, index, self) =>
      index === self.findIndex((t) => t.bodyType === car.bodyType)
  );
  return newArray;
};
