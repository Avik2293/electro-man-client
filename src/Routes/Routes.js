import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Course from "../Pages/Course";
import Courses from "../Pages/Courses";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";

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
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            }
        ]
    },
    {
        path: '/faq',
        element: <Faq></Faq>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
    // {
    //     path: '/login',
    //     element: 
    // },
    // {
    //     path: '/register',
    //     element: 
    // }
]);