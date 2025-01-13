"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import { ProductDataType } from "../../types/productDataType";
import useCartStore from "@/store/cartStore";


const DetailsPage = ({ data }: { data: ProductDataType }) => {
  const [selectedColor, setSelectedColor] = useState(data?.color?.[0]);
  const [selectedImage, setSelectedImage] = useState(data?.image);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);


  const handleAddtoCart = () => {
    addToCart({product:data, quantity, color:selectedColor} as any)
  }

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* left colums */}
        <div className="relative h-96 overflow-hidden aspect-ratio-1 shadow-md rounded">
          <Image src={selectedImage} alt="product-details" fill />
        </div>
        {/* right columns */}
        <div className="flex flex-col gap-4 text-white justify-center px-5 md:px-0">
          <h1 className="text-2xl font-bold">{data.name}</h1>
          <p className="text-gray-400 text-xs ">{data.description}</p>
          {/* color */}
          <div className="flex items-center gap-4">
            {data?.color?.map((item: string) => {
              switch (item) {
                case "Black": {
                  return (
                    <div
                      key={item}
                      onClick={() => setSelectedColor(item)}
                      className={`rounded-full cursor-pointer p-4 bg-black ${selectedColor === item ? "border-2 border-white" : ""}`}
                    ></div>
                  );
                }
                case "White": {
                  return (
                    <div
                      key={item}
                      onClick={() => setSelectedColor(item)}
                      className={`rounded-full cursor-pointer p-4 bg-white ${selectedColor === item ? "border-2 border-black" : ""}`}
                    ></div>
                  );
                }
                case "Red": {
                  return (
                    <div
                      key={item}
                      onClick={() => setSelectedColor(item)}
                      className={`rounded-full p-4 cursor-pointer bg-red-500 ${selectedColor === item ? "border-2 border-black" : ""}`}
                    ></div>
                  );
                }
                case "Blue": {
                  return (
                    <div
                      key={item}
                      onClick={() => setSelectedColor(item)}
                      className={`rounded-full p-4 cursor-pointer bg-blue-500 ${selectedColor === item ? "border-2 border-black" : ""}`}
                    ></div>
                  );
                }
                case "Green": {
                  return (
                    <div
                      key={item}
                      onClick={() => setSelectedColor(item)}
                      className={`rounded-full p-4 cursor-pointer bg-green-500 ${selectedColor === item ? "border-2 border-black" : ""}`}
                    ></div>
                  );
                }
                case "Yellow": {
                  return (
                    <div
                      key={item}
                      onClick={() => setSelectedColor(item)}
                      className={`rounded-full p-4 cursor-pointer bg-yellow-500 ${selectedColor === item ? "border-2 border-black" : ""}`}
                    ></div>
                  );
                }
                case "Brown": {
                  return (
                    <div
                      key={item}
                      onClick={() => setSelectedColor(item)}
                      className={`rounded-full p-4 cursor-pointer bg-yellow-950-500 ${selectedColor === item ? "border-2 border-black" : ""}`}
                    ></div>
                  );
                }
                default: {
                  return (
                    <div
                      key={item}
                      onClick={() => setSelectedColor(item)}
                      className={`rounded-full p-4 cursor-pointer bg-gray-500 ${selectedColor === item ? "border-2 border-black" : ""}`}
                    ></div>
                  );
                }
              }
            })}
          </div>
          {/* price */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">${data.price}</h1>
            <p className="text-gray-400 text-xs line-through">
              ${data.price + 100}
            </p>
          </div>
          {/* Qty */}
          <div className="flex  items-center">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Qty</label>
              <input type="number" className="w-1/2 py-1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
              <div className="flex gap-2">
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 rounded-full bg-black text-lg font-bold">
                  +
                </button>
                <button onClick={() => setQuantity(quantity - 1)} className="px-3 py-1 rounded-full bg-black text-lg font-bold">
                  -
                </button>
              </div>
            </div>
          </div>
          <div>
            <button onClick={handleAddtoCart} className="btn bg-yellow-600 text-lg hover:bg-yellow-700 text-black px-4 py-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-10 gap-3 px-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {data?.extraImages?.map((image, index) => (
            <div
              onClick={() => setSelectedImage(image)}
              key={index}
              className="hover:scale-105 h-full transition-transform duration-300 rounded overflow-hidden aspect-ratio-1"
            >
              <Image
                src={image}
                alt="product-details-image"
                width={100}
                height={100}
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
