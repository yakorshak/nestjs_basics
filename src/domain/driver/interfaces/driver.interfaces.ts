export interface IDriverBody {
  name: string;
  carId: number;
}

export interface IDriver extends IDriverBody {
  id: number;
}

export interface IDriverUpdate extends IDriverBody {
  id: number;
  body: Partial<IDriverBody>;
}

export type IDriverCreate = IDriverBody;

export interface IDriverDelete {
  id: number;
}
