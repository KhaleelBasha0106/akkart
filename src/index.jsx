import { combineReducers } from "redux";
import {
  selectedProductReducer,
  setProductReducer,
} from "./Reducers/ProducerReducer"; 

export const allReducers = combineReducers({
  setprodReducer: setProductReducer,
  selectedProd: selectedProductReducer,
});
