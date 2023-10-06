import React from 'react';
import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../layout/Root";
import Home from '../pages/homepage/Home';
import Login from '../pages/homepage/login/Login';
import Register from '../pages/register/Register';
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);
export default routes;