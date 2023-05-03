import { Link } from "react-router-dom";
import pageNotImg from "../../assets/pageNotfound.jpg";
const NotFound = () => {
  return (
    <div>
      <div className=" text-center">
        <div>
          <div className="relative">
            <img className="mx-auto" width={1000} src={pageNotImg} alt="" />
          </div>
          <div className="absolute -mt-24 font-bold ml-[680px]">
            <p className=" text-black text-2xl">Page Not Found</p>
          </div>
        </div>
        <Link to="/">
          <button className=" bg-blue-500 text-white p-2 rounded">
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
