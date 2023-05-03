// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";

const MenuManin = () => {
    const {id} = useParams();
    const recipes = useLoaderData();
    console.log(recipes.recipes[0].image);
    return (
        <div>
            <div>
                <img src={recipes.image} alt="" />
            </div>
                <img>this is menu manin</img>
                <img src={recipes.recipes[0].image} alt="" />
        </div>
    );
};

export default MenuManin;