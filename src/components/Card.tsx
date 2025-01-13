import Image from "next/image";
import React from "react";
import { ProductDataType } from "../../types/productDataType";
// import Image from "next/image"
const Card = ({ product }: { product: ProductDataType }) => {
  console.log(product)
  return (
    <div className="flex items-center justify-center">
      <div className="relative card card-compact bg-base-100 w-80 hover:shadow-xl hover:shadow-black/40 transition-all duration-300">
        <figure className="hover:scale-105 transition-transform duration-500 ">
          <Image
  src={product?.image}
  alt={product?.name || "Product Image"}
  className="w-full h-auto object-cover aspect-[4/3]"
  width={500}
  height={200}
  priority
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>        </figure>
        <div className="card-body">
          <h2 className="text-lg font-semibold text-white">{product.name}</h2>
          {/* <p>{product.description}</p> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Rs {product.price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
