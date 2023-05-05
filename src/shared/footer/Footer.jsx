import { Link } from "react-router-dom";
import { AiFillFacebook,AiFillYoutube,AiFillTwitterCircle } from "react-icons/ai";
export default function Example() {
  return (
    <footer className=" w-full bg-black p-8">
      <div className="container mx-auto flex gap-8 items-center">
        <div className=" bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 p-2 rounded">
          <p className="text-3xl font-medium text-white inline-block text-transparent bg-clip-text">
            Chef_Recipe_Hunter
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <div>
              <p className="text-white">About Us</p>
              <Link to="/">
                <p className="text-white mt-4">Home</p>
              </Link>
              <Link to="/blog">
                <p className="text-white">Blog</p>
              </Link>
            </div>
          </div>
          <div>
            
              <p className="text-white">Service</p>
              <p className="text-white mt-4">Birthday</p>
              <p className="text-white">Meeting</p>
              <p className="text-white">Wedding</p>
           
          </div>
          <div>
              <p className="text-white">NEWSLETTER</p>
              <div className="mt-4">
                  <div className="relative">
                    <input className="rounded h-8" type="email" placeholder="Type your email" />
                  </div>
                  <div className="absolute -mt-[32px] ml-36">
                    <button className="bg-blue-500 h-8  text-white rounded-r">SignUp</button>
                  </div>
              </div>
              <p className="text-white mt-4">Follow US</p>
              <div className="flex gap-4 items-center">
                  <AiFillFacebook className="text-blue-600 text-3xl"/>
                  <AiFillYoutube className="text-red-600 text-3xl"/>
                  <AiFillTwitterCircle className="text-blue-600 text-3xl"/>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
