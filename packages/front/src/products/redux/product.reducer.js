import { GET_INFO } from "./product.types";

const initialState = {
  data: null
};

export default function prodReducer(
  state = initialState,
  action
){
  switch (action.type) {
    case GET_INFO:
      return {
        data: action.payload.products
      };

    default:
      return state;
  }
}