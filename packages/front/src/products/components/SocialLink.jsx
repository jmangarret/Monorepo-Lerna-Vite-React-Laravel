import React from "react";
import "../styles/socialLink.css";
import { useSelector } from "react-redux";

export const SocialLinks = () => {
  const product = useSelector((state) => state.products.data);

  return (
    <>
      <ul className="social-links">
        {product.socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link}>{link}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
