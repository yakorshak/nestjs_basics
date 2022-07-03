export interface IShopBody {
  name: string;
  color: string;
}

export interface IShop extends IShopBody {
  id: number;
}

export interface IShopUpdate {
  id: number;
  body: Partial<IShopBody>;
}

export type IShopCreate = IShopBody;

export interface IShopDelete {
  id: number;
}
