import { types } from "../ActionTypes/ProductActionTypes";

export const setProducts = (products) => {
  return {
    type: types.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: types.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: types.REMOVE_SELECTED_PRODUCTED,
  };
};

export const addtoCart = (product) => {
  return {
    type: types.ADD_TO_CART,
    payload: product,
  };
};
