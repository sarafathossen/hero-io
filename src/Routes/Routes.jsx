import { createBrowserRouter } from "react-router";
import App from "../App";
import Apps from "../Pages/Apps";
import Home from "../Pages/Home";
import Layouts from "../Layouts/Layouts";
import ErrorPage from "../Pages/ErrorPage";
import Installations from "../Pages/Installations";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement:<p>Loading...</p>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                
            },
            {
                path: '/home',
                element: <Home></Home>,
                
            },
           
            {
                path: '/appdetails/:id',
                element: <AppDetails></AppDetails>,
                
            },
            {
                path: '/home/appdetails/:id',
                element: <AppDetails></AppDetails>,
            },
            {
                path: '/apps',
                element: <Apps></Apps>,
            },
            {
                path: '/apps/appdetails/:id',
                element: <AppDetails></AppDetails>,
            },
            {
                path: '/installations/',
                element: <Installations></Installations>
            },
            
        ]
    },

])
export default router