import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
const ChefCard = ({ chef }) => {
  const { name, image, gender, experience, recipes, likes } = chef;
  return (
    <div>
      <div className=" shadow-lg">
        <div className="p-4">
          <img className="w-[100%] h-[400px]" src={image} alt="" />
        </div>
        <div className="text-center  p-4  ">
          <p>{name}</p>
          <p>Year of experience:{experience}</p>
          <p>Total recipe: {recipes}</p>
          <span className=" flex justify-center items-center">
            <p>{likes}</p>
           <p> <AiFillLike className="text-blue-500"></AiFillLike></p>
          </span>

            <Link to={`/recipe/${chef.id}`}>
                <button className=" w-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 p-2 rounded text-white ">View Recipes Button</button>
            </Link>

        </div>
        
      </div>
    </div>
  );
};

export default ChefCard;
