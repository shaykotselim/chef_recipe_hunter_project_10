import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
const ChefCard = (props) => {
  const { name, image, experience, _recipes, likes, id } =props.chef;
  return (
    <div>
      <div className=" shadow-lg">
        <div className="p-4">
          <img className="w-[100%] h-[400px]" src={image} alt="" />
        </div>
        <div className="text-center  p-4  ">
          <p>{name}</p>
          <p>Year of experience:{experience}</p>
          <p>Total recipe: {_recipes}</p>
          <span className=" flex justify-center items-center">
            <p>{likes}</p>
           <p> <AiFillLike className="text-blue-500"></AiFillLike></p>
          </span>

            <Link to={`/recipe/${id}`}>
                <button className=" bg-blue-600 p-2 rounded text-white ">View Recipes</button>
            </Link>

        </div>
        
      </div>
    </div>
  );
};

export default ChefCard;
