// import React from 'react';
import { AiFillStar,AiFillHeart } from "react-icons/ai";

const ChefRecipe = ({recip}) => {
    const {name,ingredients, image, price, method,rating} = recip;
    return (
        <div className="mt-8 p-8">
            <div>
                <img className="h-[300px] rounded w-full" src={image} alt="" />
            </div>
            <div className="px-4">
                <div className="flex justify-between items-center mt-8">
                    <p className="text-xl font-semibold">{name}</p>
                    <p className="flex items-center font-semibold text-xl">{rating.number}<AiFillStar className="text-yellow-600"/></p>
                    <p className="text-red-900 text-xl font-semibold"><AiFillHeart/></p>

                </div>
                <div className="mt-2">
                    <p className="font-bold" > Price: ${price}</p>
                </div>
                <div className="mt-4 text-sm">
                    <p className="font-semibold underline">Ingredients:</p>
                    <p className="mt-2">{ingredients}</p>
                </div>
                
                <div className="mt-8 text-sm">
                    <p className="font-semibold underline">Cooking Instructions:</p>
                    <p className="mt-2">{method}</p>
                </div>

            </div>
        </div>
    );
};

export default ChefRecipe;