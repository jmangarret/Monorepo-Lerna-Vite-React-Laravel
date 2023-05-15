import React from "react";
import "../styles/size.css";
import { useSelector } from "react-redux";

export const Size = () => {
  const product = useSelector((state) => state.products.data);

  return (
    <>
      <div className="subtitle">TALLE</div>
      <ul className="size-list">
        {product.sizes.map((size) => (
          <li className="circle" key={size.id}>{size.size}</li>
        ))}
      </ul>

      <hr className="fat" />

    </>
  );
};
