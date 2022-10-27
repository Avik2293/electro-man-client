import { createBrowserRouter } from "react-router-dom";
import CheckOutPage from "../Components/CheckOutPage";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Course from "../Pages/Course";
import Courses from "../Pages/Courses";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`https://electro-man-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOutPage></CheckOutPage></PrivateRoute>,
                loader: ({params}) => fetch(`https://electro-man-server.vercel.app/course/${params.id}`)
            }
        ]
    }
]);