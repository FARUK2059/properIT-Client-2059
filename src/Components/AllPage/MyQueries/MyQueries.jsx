import { Link } from "react-router-dom";
import AddQuerisBanner from "./AddQuerisBanner/AddQuerisBanner";


const MyQueries = () => {
    return (
        <div>

            {/* Add Queries Banner */}
            <div>
                <AddQuerisBanner></AddQuerisBanner>
            </div>

            {/* My Query section */}
            <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 p-2 gap-6 mt-10">

                    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md border">

                        {/* Querie IMG and Title */}
                        <div>
                            {/* <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" /> */}
                            <h2 className="mb-1 text-xl font-semibold">Query Title</h2>
                        </div>

                        {/* Queries Details */}
                        <div className="text-start">
                            <p>Product Name : <span>Hadphone</span></p>
                            <p>Brand Name : <span>xiomi</span></p>
                            {/* <p>Alternation Reason : <span>This dive is very bad</span></p> */}
                            {/* <p>Post Date : <span> 13/05/2020 </span></p> */}
                            <p>recommendationCount : <span> 2 </span></p>
                        </div>

                        <div className="flex space-x-4 items-center">
                            <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
                            </div>
                        </div>
                    </div>

                    <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-1 sm:p-1 lg:p-2">
                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                        <div className="flex justify-between sm:gap-4 ">
                            <div className="text-center">
                                <h3 className="text-lg font-bold text-gray-900 sm:text-xl"> Quries Title </h3>
                                <p className="mt-1 text-xs font-medium text-gray-600 text-right">By John Doe</p>
                            </div>

                            <div className="">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                    className="size-16 rounded-lg object-cover shadow-sm"
                                />
                            </div>
                        </div>

                        {/* Queries Details */}
                        <div className="text-start mt-4">
                            <p>Product Name : <span>Hadphone</span></p>
                            <p>Brand Name : <span>xiomi</span></p>
                            {/* <p>Alternation Reason : <span>This dive is very bad</span></p> */}
                            {/* <p>Post Date : <span> 13/05/2020 </span></p> */}
                            <p>recommendationCount : <span> 2 </span></p>
                        </div>

                        <dl className="mt-6 flex gap-4 mb-6 justify-center">

                            {/*View Queries Button */}
                            <div>
                                <Link to="" className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" > Details </Link>
                            </div>

                            {/*Update Queries Button */}
                            <div>
                                <Link to="" className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" > Update </Link>
                            </div>
                            {/* Delete Queries Button */}
                            <div>
                                <Link to="" className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" > Delete </Link>
                            </div>

                            
                        </dl>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default MyQueries;