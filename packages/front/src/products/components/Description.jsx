import React, { useState } from "react";
import "../styles/description.css";
import { useSelector } from "react-redux";

export const Description = () => {
  const product = useSelector((state) => state.products.data);

  const [collapse, setCollapse] = useState(true);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <div className="divider">
        <div className="subtitle">DESCRIPCION</div>
        <div>
          <a href="#" onClick={handleCollapse}>
            <label htmlFor="expand">
              +
            </label>
          </a>
        </div>
      </div>
      <hr />
      <div id="expand" className="separator" dangerouslySetInnerHTML={{__html: product.description }}></div>

    </>
  );
};
