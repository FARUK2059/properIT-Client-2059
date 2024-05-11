
import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Root from "./Root";
import Home from "../Components/HomePage/Home";
import Register from "../Components/RegisterLogin/Register";
import LogIn from "../Components/RegisterLogin/LogIn";
import MyQueries from "../Components/AllPage/MyQueries/MyQueries";
import PrivetRout from "../Components/Autentication/PrivateRoute/PrivetRout";
import AddMyQueries from "../Components/AllPage/MyQueries/AddMyQueries/AddMyQueries";
import Details from "../Components/AllPage/MyQueries/Details/Details";
import Update from "../Components/AllPage/MyQueries/Update/Update";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/myqueries",
                element: <PrivetRout><MyQueries></MyQueries></PrivetRout>
            },
            {
                path: "/addmyqueries",
                element: <PrivetRout><AddMyQueries></AddMyQueries></PrivetRout>
            },
            {
                path: "/myquerydetails",
                element: <Details></Details>
            },
            {
                path: "/myupdate",
                element: <Update></Update>
            }
        ]
    },
]);

export default router;