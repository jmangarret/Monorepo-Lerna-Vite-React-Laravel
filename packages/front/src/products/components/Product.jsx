import React from "react";
import IconLike from "../images/heart.svg"
import "../styles/product.css"

import { useSelector } from "react-redux";

export const Product = () => {

  const product = useSelector((state) => state.products.data);

  return (
    <>
      <img className="product-image" src={product.productimage} alt={product.productname} />
      <div className="title" dangerouslySetInnerHTML={{__html: product.brand }}>{}</div>
      <div className="divider">
        <div>
          <p className="separator" dangerouslySetInnerHTML={{__html: product.productname }}></p>
          <p className="">Vendido y entregado:
            <span className="seller"> {product.seller} </span>
          </p>
        </div>

        <div>
          <a href="#"><img src={IconLike} /></a>
        </div>
      </div>

      <hr />
    </>
  );
};
