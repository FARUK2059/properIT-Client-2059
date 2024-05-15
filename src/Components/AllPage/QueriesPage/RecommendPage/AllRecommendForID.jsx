import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useEffect } from "react";



const AllRecommendForID = () => {
    const { updateTitle } = useAuth();
    const allRecommendId = useLoaderData();
    // console.log(allRecommendId);

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle(' Recommend By ID | ProperIT');
    }, [updateTitle]);

    return (
        <div>

            {
                allRecommendId.length ?
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 justify-center items-center">

                        {
                            allRecommendId.map((rec) => <div key={rec._id}>

                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={rec.recommendProductimageURL} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body">

                                        <h2 className="card-title  justify-center">{rec.recommendTitle}</h2>
                                        <div className="text-start">
                                            <p>Recommend Product Name : <span>{rec.recommendProductName}</span></p>
                                            <p>Recommendation Reason : <span>{rec.recommendationReason}</span></p>
                                            <p>Recommend Date : <span> {rec.recommenddatetime} </span></p>
                                        </div>
                                        <div className="p-2 mt-4">
                                            <h2 className="text-start text-lg font-bold">Recommender Information :</h2>
                                            <div className="flex gap-4 justify-between mt-4">
                                                <div>
                                                    <img alt="" src={rec.recommenderImageURL} className="object-cover w-12 h-12 rounded-md shadow dark:bg-gray-500" />
                                                </div>
                                                <div className="flex flex-col space-y-1 text-end">
                                                    <p className="text-sm font-semibold">Name: <span>{rec.recommenderName}</span></p>
                                                    <p className="text-sm font-semibold">Email: <span>{rec.recommenderEmail}</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-action justify-center">
                                            <Link to="/queries"><button className="btn btn-primary">Back to Query</button></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>)
                        }
                    </div>
                    :
                    <div>
                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                    <h1 className="text-5xl font-bold">The Recommend is Empty</h1>
                                    <div className="p-6">
                                        <Link to="/queries"><button className="btn btn-warning">Back to Query</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }



        </div>
    );
};

export default AllRecommendForID;