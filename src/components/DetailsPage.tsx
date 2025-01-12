import Image from "next/image";
import React from "react";

const DetailsPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* left colums */}
        <div className="relative h-96 overflow-hidden aspect-ratio-1 shadow-md rounded-md">
          <Image
            src={
              "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            alt="product-details"
            fill
          />
        </div>
        {/* right columns */}
        <div className="flex flex-col gap-4 text-white justify-center px-5 md:px-0">
          <h1 className="text-5xl font-bold">Nike Shoes</h1>
          <p className="text-gray-400 text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            quosconsectetur adipisicing elit. Natus, quosconsectetur adipisicing
            elit. Natus, quos.
          </p>
          {/* color */}
          <div className="flex items-center gap-4">
            <div className="rounded-full p-4 bg-blue-500"></div>
            <div className="rounded-full p-4 bg-blue-500"></div>
            <div className="rounded-full p-4 bg-blue-500"></div>
          </div>
          {/* Qty */}
          <div className="flex  items-center">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Qty</label>
              <input type="number" className="w-1/2 py-2" />
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-full bg-black text-lg font-bold">
                  +
                </button>
                <button className="px-4 py-2 rounded-full bg-black text-lg font-bold">
                  -
                </button>
              </div>
            </div>
          </div>
          <div>
            <button className="btn bg-primary text-lg hover:bg-purple-700 text-black">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-10 gap-3 px-5">
        <ul>
          <li>
            <Image
              src={
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              }
              alt="product-details"
              width={100}
              height={100}
              className="rounded-lg overflow-hidden"
            />
          </li>
        </ul>
        <ul>
          <li>
            <Image
              src={
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              }
              alt="product-details"
              width={100}
              height={100}
              className="rounded-lg overflow-hidden"
            />
          </li>
        </ul>
        <ul>
          <li>
            <Image
              src={
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              }
              alt="product-details"
              width={100}
              height={100}
              className="rounded-lg overflow-hidden"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsPage;
