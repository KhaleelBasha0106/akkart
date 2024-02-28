import { types } from "../ActionTypes/ProductActionTypes";

const initialState = {
  products: [],
  myCart: [],
};

export function setProductReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
}

export function mycartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        myCart: [...state.myCart, payload],
      };
    default:
      return state;
  }
}

export function selectedProductReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case types.SELECTED_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case types.REMOVE_SELECTED_PRODUCTED:
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
}
