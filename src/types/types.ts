import { Dispatch, SetStateAction } from 'react';

export type TodoDataType = {
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
};

export type TodoInputType = {
  title: string;
};

export type SetStateType<T> = Dispatch<SetStateAction<T>>;
