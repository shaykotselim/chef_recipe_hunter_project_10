import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const {user,logOut} = useContext(AuthContext)
  // console.log(user,logOut);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/"className={({ isActive }) =>
            isActive ? "text-orange-600" : "text-black"
          }>
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-orange-600" : "text-black"
          }
        >
          Blog
        </NavLink>
      </Typography>
    </ul>
  );

  // Sign Out Area here----------------------------------------------------------------
  const handleSingOut =()=>{
    logOut()
    .then()
    .catch(error=>{
      console.log(error.message);
    })
  }

  return (
    <Navbar className="mx-auto shadow-none max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link to="/">
            <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 p-2 rounded">
              <p className="text-3xl font-medium text-white inline-block text-transparent bg-clip-text">
                Chef_Recipe_Hunter
              </p>
            </div>
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="lg:flex lg:items-center lg:gap-4">
          {
            user?<p>{user?.displayName}</p>:''
          }
          {
            user?<img title={user?.displayName} className="h-[40px] w-[40px] rounded-full"  src={user.photoURL} alt="" />:''
          }
        </div>
        <div>
          {user ?  <Button
              variant="gradient"
              size="sm"
              className="hidden ml-2 lg:inline-block"
              onClick={handleSingOut}
            >
              <span>Sign-out</span>
            </Button>:<Link to="/login">
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Sign in</span>
            </Button>
          </Link>
        
          }
          
        </div>
        
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
        
        {/* <img src="" alt="" /> */}
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex justify-center gap-4">
            
            {
             user? <Button onClick={handleSingOut} variant="gradient" size="sm" fullWidth className="mb-2">
                <span>Sign out</span>
              </Button>:<Link to="/login">
                  <Button  variant="gradient" size="sm" fullWidth className="mb-2">
                <span>Sign in</span>
              </Button>
            </Link>
            }
              
            
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
