// import React from 'react';
import { useState } from "react";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import LazyLoad from "react-lazy-load";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipe = ({ recip }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { name, ingredients, image, price, method, rating } = recip;

  const notify = () => {
    toast("Add your Faviroute Recipe");
    setIsClicked(true);
  };
  return (
    <div className="mt-8 p-8">
      <div>
        <LazyLoad>
          <img className="h-[300px] rounded w-full" src={image} alt="" />
        </LazyLoad>
      </div>
      <div className="px-4">
        <div className="lg:flex justify-between items-center  mt-8">
          <p className="text-xl font-semibold">{name}</p>
          <div>
            <p className="flex items-center font-semibold text-xl">
              {rating.number}
              <AiFillStar className="text-yellow-600" />
            </p>
            <p className="font-semibold">{rating.badge}</p>
          </div>

          <span onClick={notify}
            disabled={isClicked}
            type="button" className={`px-8 py-3 text-3xl rounded focus:outline-none ${
              isClicked ? "text-red-200" : "text-red-800"
            }`}>
            <AiFillHeart />
          </span>
          <ToastContainer />
        </div>
        <div className="mt-2">
          <p className="font-bold"> Price: ${price}</p>
        </div>
        <p className="font-semibold mt-4 bg-blue-800 text-white p-1 rounded underline">
          Ingredients:
        </p>
        <div className="h-32 overflow-y-auto  p-2 rounded text-sm">
          <p className="mt-2">{ingredients}</p>
        </div>
        <p className="font-semibold mt-8 underline bg-blue-800 p-1 rounded text-white">
          Cooking Instructions:
        </p>
        <div className="  rounded p-2 text-sm h-32 overflow-y-auto">
          <p className="mt-2">{method}</p>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;
