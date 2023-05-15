import React from "react";
import "../styles/socialLink.css";
import { useSelector } from "react-redux";
import { Facebook, MessageCircle, Twitter } from 'react-feather';

export const SocialLinks = () => {
  const product = useSelector((state) => state.products.data);

  return (
    <>
      <ul className="social-links">
          <li key={1}>
            <a href="#"><Facebook color="gray" fill="gray" /></a>
          </li>
          <li key={2}>
            <a href="#"><Twitter color="gray" fill="gray" /></a>
          </li>
          <li key={3}>
            <a href="#"><MessageCircle color="gray" fill="gray" /></a>
          </li>
      </ul>
    </>
  );
};
