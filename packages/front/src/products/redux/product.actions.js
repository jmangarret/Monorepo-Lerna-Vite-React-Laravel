import { GET_INFO } from "./product.types";

export function getInfo(products) {
  return {
    type: GET_INFO,
    payload: { products }
  };
}
