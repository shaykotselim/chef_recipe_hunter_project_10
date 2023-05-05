import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Spinner } from "@material-tailwind/react";

const Chef = () => {
  const {loading, setLoading} = useContext(AuthContext) 
    const [chefs, setChefs] = useState([])
    
    useEffect(()=>{
        fetch('https://chef-recipe-hunter-server-shaykotselim98-gmailcom.vercel.app/chef')
        .then(res =>res.json())
        .then(data => setChefs(data))
        setLoading(false)
    },[])
    if(loading){
      <Spinner className="" />
    }
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