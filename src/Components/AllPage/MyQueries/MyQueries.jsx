import { Link } from "react-router-dom";
import AddQuerisBanner from "./AddQuerisBanner/AddQuerisBanner";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";


const MyQueries = () => {

    const { user } = useAuth();
    const [quries, setQueries] = useState([]);
    // console.log(user, quries);

    const url = 'http://localhost:5000/queries';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setQueries(data))
    }, [url]);

    const userQueryData = quries.filter((item) => item?.email === user.email);
    console.log(userQueryData);


    // const axiosSecure = useAxiosSecure();



    // const url = `/queries?email=${user?.email}`;
    // useEffect(() => {
    //     axiosSecure.get(url)
    //         .then(res => setQueries(res.data))
    // }, [url, axiosSecure]);




    return (
        <div>

            {/* Add Queries Banner */}
            <div>
                <AddQuerisBanner></AddQuerisBanner>
            </div>

            {/* My Query section */}
            <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 p-2 gap-6 mt-10">

                    {
                        userQueryData.map((query) => <div key={query._id}>

                            <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-1 sm:p-1 lg:p-2">
                                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                                <div className="flex justify-between sm:gap-4 ">
                                    <div className="text-center">
                                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl"> Quries Title {query.length} </h3>
                                        <p className="mt-1 text-xs font-medium text-gray-600 text-right">By John Doe</p>
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
                                    <p>Product Name : <span>Hadphone</span></p>
                                    <p>Brand Name : <span>xiomi</span></p>
                                    {/* <p>Alternation Reason : <span>This dive is very bad</span></p> */}
                                    <p>Post Date : <span> 13/05/2020 </span></p>
                                    <p>recommendationCount : <span> 2 </span></p>
                                </div>

                                <dl className="mt-6 flex gap-4 mb-6 justify-center">

                                    {/*View Details Queries Button */}
                                    <div>
                                        <Link to="/myquerydetails" className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" > Details </Link>
                                    </div>

                                    {/*Update Queries Button */}
                                    <div>
                                        <Link to="/myupdate" className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" > Update </Link>
                                    </div>
                                    {/* Delete Queries Button */}
                                    <div>
                                        <Link to="" className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" > Delete </Link>
                                    </div>


                                </dl>
                            </div>

                        </div>)
                    }



                </div>
            </div>

        </div>
    );
};

export default MyQueries;