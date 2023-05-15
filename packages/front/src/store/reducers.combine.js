import { combineReducers } from "redux";
import prodReducer from "../products/redux/product.reducer";

const rootReducer = combineReducers({
  products: prodReducer
});

export default rootReducer;