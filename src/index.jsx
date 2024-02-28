import { combineReducers } from "redux";
import {
  mycartReducer,
  selectedProductReducer,
  setProductReducer,
} from "./Reducers/ProducerReducer"; 

export const allReducers = combineReducers({
  setprodReducer: setProductReducer,
  selectedProd: selectedProductReducer,
  mycartRedu : mycartReducer
});
