export type NavLink = {
  targetSegment: string | null | undefined;
  name: string;
  path: string;
};
export interface CarInfo {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export interface ChunkedCarInfo {
  carChunk: [CarInfo[]];
}
