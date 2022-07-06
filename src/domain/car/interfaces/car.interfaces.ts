import { IDriver } from 'src/domain/driver/interfaces/driver.interfaces';

export interface ICarBody {
  brand: string;
  color?: string;
}

export interface ICar extends ICarBody {
  id: number;
  drivers?: IDriver[];
}

export interface ICarUpdateData {
  brand?: string;
  color?: string;
}

export type ICarCreate = ICarBody;

export interface ICarDelete {
  id: number;
}
