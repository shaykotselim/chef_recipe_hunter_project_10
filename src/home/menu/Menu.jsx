import { useEffect, useState } from "react";
// import MenuManin from "./MenuManin";
import MenuNav from "./MenuNav";


const Menu = () => {
    const [chefs, setChefs] = useState([]) 
    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res =>res.json())
        .then(data => setChefs(data))
    },[])
    return (
        <div className="container mx-auto grid gap-8 grid-cols-4">
            {
                 chefs.map(chef=><MenuNav
                    key = {chef.id}
                    chef = {chef}
                 ></MenuNav>) 
            }

        </div>
    );
};

export default Menu;