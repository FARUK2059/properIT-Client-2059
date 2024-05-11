import { Link, useLoaderData } from "react-router-dom";



const Queries = () => {

    const allQueries = useLoaderData();
    // console.log(allQueries);

    // const { productName, productBrand, productimageURL, querytitle, boycotdescription, datetime, recommendationCount, userimageURL, username } = allQueries;


    return (
        <div>
            <div className="grid justify-center p-2 mt-6 mb-6">

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {
                        allQueries.map((qury) => <div key={qury._id}>

                            <div className="card flex flex-col max-h-screen p-6 space-y-6 overflow-hidden rounded-lg shadow-md border">

                                {/* Querie IMG and Title */}
                                <div className="">
                                    <img src={qury.productimageURL} alt="" className=" mb-4 h-60 w-60" />
                                    <h2 className="mb-1 text-xl font-semibold">{qury.querytitle}</h2>
                                </div>

                                {/* Queries Details */}
                                <div className="text-start">
                                    <p>Product Name : <span>{qury.productName}</span></p>
                                    <p>Brand Name : <span>{qury.productBrand}</span></p>
                                    <p>Alternation Reason : <span>{qury.boycotdescription}</span></p>
                                    <p>Posted Date : <span> {qury.datetime} </span></p>
                                    <p>recommendationCount : <span> {qury.recommendationCount} </span></p>
                                    <div className="grid justify-start mt-4">
                                        <Link to={`/recommend/${qury._id}`}><button className="btn btn-error">Recommend</button></Link>
                                    </div>
                                </div>

                            </div>

                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Queries;