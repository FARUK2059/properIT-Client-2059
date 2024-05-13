
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
import AllRecommendForID from "../Components/AllPage/QueriesPage/RecommendPage/AllRecommendForID";
import MyRecommendation from "../Components/AllPage/MyRecommendation/MyRecommendation";
import RecommendForMe from "../Components/AllPage/RecomandForMe/RecommendForMe";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/letest-queries`)
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
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/queries`)
            },
            {
                path: "/recommend/:id",
                element: <PrivetRout><Recommend></Recommend></PrivetRout>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/queries`)
            },
            {
                path: "/myqueries",
                element: <PrivetRout><MyQueries></MyQueries></PrivetRout>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/queries`)
            },
            {
                path: "/allrecommendforid/:queryId",
                element: <AllRecommendForID></AllRecommendForID>,
                loader: ( { params } ) => fetch(`${import.meta.env.VITE_API_URL}/recommends/${params.queryId}`)
            },
            {
                path: "/addmyqueries",
                element: <PrivetRout><AddMyQueries></AddMyQueries></PrivetRout>
            },
            {
                path: "/myquerydetails/:id",
                element: <Details></Details>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/queries`)
            },
            {
                path: "/myupdate/:id",
                element: <Update></Update>,
                loader: ( { params } ) => fetch(`${import.meta.env.VITE_API_URL}/queries/${params.id}`)
            },
            {
                path: "/recommendforme",
                element: <PrivetRout><RecommendForMe></RecommendForMe></PrivetRout>,
                loader: ( ) => fetch(`${import.meta.env.VITE_API_URL}/recommends`)
            },
            {
                path: "/myrecomendation",
                element: <PrivetRout><MyRecommendation></MyRecommendation></PrivetRout>,
                loader: ( ) => fetch(`${import.meta.env.VITE_API_URL}/recommends`)
            }
        ]
    },
]);

export default router;