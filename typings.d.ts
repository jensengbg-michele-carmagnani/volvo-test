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
