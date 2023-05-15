import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../styles/main.css"
import { Product } from "./Product";
import { Size } from "./Size";
import { SocialLinks } from "./SocialLink";
import { Description } from "./Description";
import { Detail } from "./Detail";
import { getInfo } from "../redux/product.actions";
import { getProducts } from "../http/product";

export const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const data = await getProducts();
    dispatch(getInfo(data.products[0]));
  }

  const product = useSelector((state) => state.products.data);

  return (
    <>
      {
        product && <div className="container">

          <Product />

          <Size />

          <SocialLinks />

          <Description />

          <Detail />

        </div>
      }
    </>
  );
};
