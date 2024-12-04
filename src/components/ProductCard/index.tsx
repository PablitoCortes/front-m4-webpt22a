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

  // return (
  //     <div className="flex flex-col justify-between bg-white w-[200px] h-[300px] m-[15px] rounded-[4px] shadow-custom ">
  //         <img className=" w-30 h-40 py-2 object-cover self-center" src={image} alt={name} />
  //         <div className="flex flex-col p-4 w-full h-full justify-between">
  //             <h3 className="w-full text-text font-sans truncate" >{name}</h3>
  //             <p className="text-text font-sans">{price}</p>
  //             <button className="bg-secondary text-white font-sans px-2 py-2 rounded-lg hover:bg-accent transition duration-300">Add to Cart</button>
  //         </div>
  //   </div>
  // )
};

export default ProductCard;
