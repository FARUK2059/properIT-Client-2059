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

    const { productName, productBrand, productimageURL, querytitle, boycotdescription, datetime, recommendationCount, userimageURL, username } = querys;



    return (
        <div className="grid justify-center p-2 mt-6 mb-6">
            <div className="flex flex-col max-h-screen p-6 space-y-6 overflow-hidden rounded-lg shadow-md border">

                {/* Querie IMG and Title */}
                <div>
                    <img src={productimageURL} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{querytitle}</h2>
                </div>

                {/* Queries Details */}
                <div className="text-start">
                    <p>Product Name : <span>{productName}</span></p>
                    <p>Brand Name : <span>{productBrand}</span></p>
                    <p>Alternation Reason : <span>{boycotdescription}</span></p>
                    <p>Post Date : <span> {datetime} </span></p>
                    <p>recommendationCount : <span> {recommendationCount} </span></p>
                </div>

                <div className="flex space-x-4  justify-between ">
                    <div className="flex gap-4 items-center">
                        <img alt="" src={userimageURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{username}</a>
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