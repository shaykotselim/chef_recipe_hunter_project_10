import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";


const Chef = () => {
    const [chefs, setChefs] = useState([]) 
    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res =>res.json())
        .then(data => setChefs(data))
    },[])
    return (
        <div className="container mx-auto grid gap-8 grid-cols-3">
            {
                 chefs.map(chef=><ChefCard
                    key = {chef.id}
                    chef = {chef}
                 ></ChefCard>) 
            }

        </div>
    );
};

export default Chef;