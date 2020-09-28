export enum ActionTypes {
  addProductToCartRequest = "ADD_PRODUCT_TO_CART_REQUEST",
  addProductToCartSucess = "ADD_PRODUCT_TO_CART_SUCCESS",
  addProductToCartFailure = "ADD_PRODUCT_TO_CART_FAILURE",
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface IcartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: IcartItem[];
  failedStockCheck: number[];
}
