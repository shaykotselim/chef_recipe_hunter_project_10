import Home from "../home/Home/Home";
import Main from "../layout/Main";


import {createBrowserRouter,} from "react-router-dom";
import Blog from "../pages/blog/Blog";
// import Menu from "../pages/menu/Menu";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NotFound from "../pages/notfound/NotFound";

// const { default: Main } = require("../layout/Main");
// const { default: Home } = require("../home/Home/Home");

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home/>,
            children:[
                {
                    
                }
            ] 

        }, 
        {
            path:'/blog', 
            element:<Blog/>
        }, 
        {
            path:'/login',
            element:<Login/>
        }, 
        {
            path:'/register',
            element:<Register/>
        },
        {
            path:"*",
            element:<NotFound/>
        }

      ]
    },
  ]);
  export default router;