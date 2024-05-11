
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
import Queries from "../Components/AllPage/QueriesPage/Queries";
import Recommend from "../Components/AllPage/QueriesPage/RecommendPage/Recommend";

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
                path: "/queries",
                element: <Queries></Queries>,
                loader: () => fetch('http://localhost:5000/queries')
            },
            {
                path: "/recommend/:id",
                element: <PrivetRout><Recommend></Recommend></PrivetRout>,
                loader: () => fetch('http://localhost:5000/queries')
            },
            {
                path: "/myqueries",
                element: <PrivetRout><MyQueries></MyQueries></PrivetRout>,
                loader: () => fetch('http://localhost:5000/queries')
            },
            {
                path: "/addmyqueries",
                element: <PrivetRout><AddMyQueries></AddMyQueries></PrivetRout>
            },
            {
                path: "/myquerydetails/:id",
                element: <Details></Details>,
                loader: () => fetch('http://localhost:5000/queries')
            },
            {
                path: "/myupdate/:id",
                element: <Update></Update>,
                loader: ( { params } ) => fetch(`http://localhost:5000/queries/${params.id}`)

            }
        ]
    },
]);

export default router;