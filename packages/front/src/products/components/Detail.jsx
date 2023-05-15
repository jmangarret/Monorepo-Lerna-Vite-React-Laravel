import React from "react";
import "../styles/detail.css"
import { useSelector } from "react-redux";

export const Detail = () => {
  const product = useSelector((state) => state.products.data);

  return (
    <>
      <div className="divider">
        <div className="subtitle">DETALLE DEL PRODUCTO</div>
        <div>
          <label htmlFor="expand">
            +
          </label>
        </div>
      </div>

      <hr />
    </>
  );
};
