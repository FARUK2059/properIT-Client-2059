import { Link, useLoaderData } from "react-router-dom";
import AddQuerisBanner from "./AddQuerisBanner/AddQuerisBanner";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";


const MyQueries = () => {

    const { user, updateTitle } = useAuth();
    const quries = useLoaderData();

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle(' My Queries | ProperIT');
    }, [updateTitle]);


    // const [quries, setQueries] = useState([]);
    const [userQueryDetailAll, setUserQueryData] = useState(quries);
    // console.log(userQueryDetailAll);


    // const url = `${import.meta.env.VITE_API_URL}/queries`;

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setQueries(data))
    // }, [url]);

    const userQueryData = userQueryDetailAll.filter((quries) => quries?.email === user.email);
    // console.log(userQueryData);

    // const axiosSecure = useAxiosSecure();



    // const url = `/queries?email=${user?.email}`;
    // useEffect(() => {
    //     axiosSecure.get(url)
    //         .then(res => setQueries(res.data))
    // }, [url, axiosSecure]);


    // Delete Function 
    const handleDeleteQuery = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {


                    fetch(`${import.meta.env.VITE_API_URL}/queries/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Query Data has been deleted.",
                                    icon: "success"
                                });
                                const remainig = userQueryDetailAll.filter(querys => querys._id !== _id);
                                setUserQueryData(remainig);
                            }
                        })
                }
            });
    }

    return (
        <div>

            {/* Add Queries Banner */}
            <div>
                <AddQuerisBanner></AddQuerisBanner>
            </div>

            {/* My Query section */}
            <div>
                {
                    userQueryData.length ?

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 p-2 gap-6 mt-10">

                            {
                                userQueryData.map((query) => <div key={query._id}>

                                    <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-1 sm:p-1 lg:p-2">
                                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                                        <div className="flex justify-between sm:gap-4 ">
                                            <div className="text-center">
                                                <h3 className="text-lg font-bold  sm:text-xl"> {query.querytitle} </h3>
                                                <p className="mt-1 text-xs font-medium  text-right">{query.username}</p>
                                            </div>

                                            <div className="">
                                                <img
                                                    alt=""
                                                    src={query.userimageURL}
                                                    className="size-16 rounded-lg object-cover shadow-sm"
                                                />
                                            </div>
                                        </div>

                                        {/* Queries Details */}
                                        <div className="text-start mt-4">
                                            <p>Product Name : <span>{query.productName}</span></p>
                                            <p>Brand Name : <span>{query.productBrand}</span></p>
                                            <p>Post Date : <span> {query.datetime} </span></p>
                                            <p>recommendationCount : <span> {query.recommendationCount} </span></p>
                                        </div>

                                        <div className="mt-6 flex gap-4 mb-6 justify-center ">

                                            {/*View Details Queries Button */}
                                            <div>
                                                <Link to={`/myquerydetails/${query._id}`} className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" > Details </Link>
                                            </div>

                                            {/*Update Queries Button */}
                                            <div>
                                                <Link to={`/myupdate/${query._id}`} className="inline-block rounded  px-8 py-3 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 bg-yellow-300" > Update </Link>
                                            </div>

                                            {/* Delete Queries Button */}
                                            <div onClick={() => handleDeleteQuery(query._id)}>
                                                <Link className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" > Delete </Link>
                                            </div>


                                        </div>
                                    </div>

                                </div>)
                            }
                        </div> 
                        :
                        <div className="p-4 mt-12">
                            <h2 className="text-2xl font-bold p-2">Your Query is Empty</h2>
                            <p> Please Add a Query button and add your query  </p>
                        </div>
                }

            </div>

        </div>
    );
};

export default MyQueries;