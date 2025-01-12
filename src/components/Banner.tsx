import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 space-y-4">
      <div className="flex flex-col gap-4 items-start mx-auto px-10 mt-10 md:mt-0">
        <h2 className="text-white text-5xl font-bold uppercase text-start">
          Welcome to <span className="text-yellow-600">Shopers</span> Store
        </h2>
        <p className="text-lg text-neutral-300">
          Get the high quality product from our store at the best price
          <br />
          and enjoy the best shopping experience
        </p>

        <button className="btn bg-yellow-600 text-black font-bold uppercase hover:bg-yellow-800">
          Get Started
        </button>
      </div>
      <div className="flex items-center justify-center mix-blend-lighten">
      <Image
        src={"/download.png"}
        alt="hero"
        width={800}
        height={800}
        className="rounded-lg mt-4 mx-auto px- md:mt-0"
        />
        </div>
    </div>
  );
};

export default Banner;
