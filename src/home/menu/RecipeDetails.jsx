// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";

const RecipeDetails = () => {
    const {id} = useParams();
    const recipes = useLoaderData();
    console.log(recipes.recipes[0].image);
    return (
        <div>
            <div>
                
            </div>
              
                <img src={recipes.recipes[0].image} alt="" />
        </div>
    );
};

export default RecipeDetails;