import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";
import Blogs from "../pages/blogs";
import SignUp from "../pages/signup";
import Login from "../pages/login";
import SingleBlog from "../pages/singleBlog";
import DashboardHome from "../pages/dasboardHome";
import CreateBlog from './../pages/CreateBlog';
import DashboardSidebar from "../layouts/DashboardSidebar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/blogs",
                element: <Blogs />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/blog/:id",
                element: <SingleBlog />,
            },
            {
                path: "/dashboard",
                element: (
                    <DashboardSidebar>
                        <DashboardHome/>
                    </DashboardSidebar>
                ),
            },
            {
                path: "/dashboard/create-blog",
                element: (
                    <DashboardSidebar>
                        <CreateBlog />
                    </DashboardSidebar>
                ),
            }
        ]
    }

]);

export default router;