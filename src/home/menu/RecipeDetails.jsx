// import React from 'react';
import { useLoaderData } from "react-router-dom";
import ChefRecipe from "./ChefRecipe";
import { AiFillLike } from "react-icons/ai";

const RecipeDetails = () => {
  // const {id} = useParams();
  const recipes = useLoaderData();
  const recipeDetails = recipes.recipes;
  console.log(recipeDetails);
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid gap-4 grid-cols-3 items-center">
          <div className="col-span-2">
            <img className="h-[500px] w-full " src={recipes.image} alt="" />
          </div>
          <div>
            <p className="text-4xl font-serif">{recipes.name}</p>
            <p className="text-sm py-2">{recipes.bio}</p>
            <div className="flex gap-8 items-center justify-between ">
                <div className="bg-blue-300 text-white p-1 rounded">
                    <p className="font-semibold">Total Recipe: {recipes._recipes}</p>
                </div>
                <div className="bg-blue-300 text-white p-1 rounded">
                    <p className="flex items-center font-semibold text-xl">{recipes.likes}:<AiFillLike className=""></AiFillLike></p>
                </div>
                <div className="bg-blue-300 text-white p-1 rounded">
                    <p className="font-semibold">Experience: {recipes.experience}years</p>
                </div>
            </div>
            
          </div>
        </div>
      </div>
      <p className="text-4xl font-serif text-center mt-8">
        {recipes.name} Special {recipeDetails.length} Items food
      </p>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {recipeDetails.map((recip) => (
            <ChefRecipe key={recipes.id} recip={recip}></ChefRecipe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
