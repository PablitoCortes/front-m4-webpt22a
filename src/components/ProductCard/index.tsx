import React from "react";
import { Product } from "@/interfaces/Product";
import "./styles.css";
import Link from "next/link";

const ProductCard: React.FC<Product> = ({ id, name, price, image }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="cardContainer">
        <img src={image} alt="" />
        <div className="cardInfo">
          <h3>{name}</h3>
          <div className="cardDetails">
            <p>${price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
