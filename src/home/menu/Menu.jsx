// import React from 'react';

import MenuManin from "./MenuManin";
import MenuNav from "./MenuNav";

const Menu = () => {
    return (
        <div className="container mx-auto grid grid-cols-4">
           <div className="grid-cols-1">
                <MenuNav/>
           </div>
            <div className="">
                <MenuManin/>
            </div>
        </div>
    );
};

export default Menu;