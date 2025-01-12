import React from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Card from "./Card";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center mt-3">
        <h2 className="text-3xl font-semibold text-white">
          Product <span className="text-yellow-600">Category</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* filter */}
        <div className="px-5 relative">
        <div className="absolute right-0 h-[93%] mx-3 border-r-[1px] border-white/20 hidden md:block"></div>
          <div className="space-y-2 ">
            <h2 className="text-2xl font-semibold text-white">Price Range</h2>
            <div className="flex space-x-2">
              <Input
                type="number"
                placeholder="Min price"
                className="rounded-lg text-white text-lg font-medium  placeholder:font-medium"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select By Latest" className="placeholder:text-lg placeholder:font-bold "/>
              </SelectTrigger>
              <SelectContent className=" bg-black/90 text-white text-lg font-medium ">
                <SelectItem value="latest">Latest Product</SelectItem>
                <SelectItem value="oldest">Oldest Product</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 mt-3">
            <button className="btn bg-yellow-600 text-black font-bold uppercase w-full">
              Filter
            </button>
          </div>
        </div>
        {/* product */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 px-5">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Product;
