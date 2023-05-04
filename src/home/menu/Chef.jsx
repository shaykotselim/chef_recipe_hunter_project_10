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
      <div>
            <div className="text-center">
                <p className="text-7xl font-serif p-8">Our Master Chef Here</p>
            </div>
          <div className="container mx-auto lg:grid gap-8 grid-cols-3">
            {
                 chefs.map(chef=><ChefCard
                    key = {chef.id}
                    chef = {chef}
                 ></ChefCard>) 
            }

        </div>
      </div>
    );
};

export default Chef;