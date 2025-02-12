export type ApiResponse<T> = {
  message: string;
  object: T | null;
  statusCode: number;
};

export type ImageRequestDto = {
  width: number;
  height: number;
  encodedData: string;
};

export type ImageResponseDto = {
  id: number;
  width: number;
  height: number;
  encodedData: string;
};
