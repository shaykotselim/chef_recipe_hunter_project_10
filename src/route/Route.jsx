import Home from "../home/Home/Home";
import Main from "../layout/Main";


import {createBrowserRouter,} from "react-router-dom";
import Blog from "../pages/blog/Blog";
// import Menu from "../pages/menu/Menu";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NotFound from "../pages/notfound/NotFound";
import RecipeDetails from "../home/menu/RecipeDetails";

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
            path:'/recipe/:id',
            element:<RecipeDetails></RecipeDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/recipe/${params.id}`)
        },
       

      ],
      
    },
    {
        path:"*",
        element:<NotFound/>
    }
  ]);
  export default router;