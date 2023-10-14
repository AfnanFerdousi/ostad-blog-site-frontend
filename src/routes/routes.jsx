import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";
import Blogs from "../pages/blogs";
import SignUp from "../pages/signup";

const router = createBrowserRouter([
  {
        path: "/", 
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>,
          },
            {
                path: "/blogs",
                element: <Blogs/>,
            },
            {
                path: "/signup",
                element: <SignUp />,
            }
          
      ]
  }
  
]);

export default router;