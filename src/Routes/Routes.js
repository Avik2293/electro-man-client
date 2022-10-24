import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import Main from "../Layout/Main";
import Catagories from "../Pages/Catagories";
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
                path: '/catagory/:id',
                element: <Catagories></Catagories>
            }
        ]
    }
]);