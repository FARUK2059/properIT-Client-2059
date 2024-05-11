import { useEffect } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Link, useLoaderData, useParams } from "react-router-dom";



const Details = () => {

    const { updateTitle } = useAuth();

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle('Details | Craft Store');
    }, [updateTitle]);


    // /***/ Art and Craft Ditails Data Loade
    const allQueryDetails = useLoaderData();
    // console.log(allQueryDetails);
    const { id } = useParams(allQueryDetails);
    // console.log(id);

    const querys = allQueryDetails?.find((query) => query._id === id)
    console.log(querys);

    // const {  } = querys;



    return (
        <div className="grid justify-center p-2 mt-6 mb-6">
            <div className="flex flex-col max-h-screen p-6 space-y-6 overflow-hidden rounded-lg shadow-md border">

                {/* Querie IMG and Title */}
                <div>
                    <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">Query Title</h2>
                </div>

                {/* Queries Details */}
                <div className="text-start">
                    <p>Product Name : <span>Hadphone</span></p>
                    <p>Brand Name : <span>xiomi</span></p>
                    <p>Alternation Reason : <span>This dive is very bad</span></p>
                    <p>Post Date : <span> 13/05/2020 </span></p>
                    <p>recommendationCount : <span> 2 </span></p>
                </div>

                <div className="flex space-x-4  justify-between ">
                    <div className="flex gap-4 items-center">
                        <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
                        </div>
                    </div>

                    <div className="">
                        <Link to="/myqueries"><button className="btn btn-error">Back to My Query</button></Link>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;