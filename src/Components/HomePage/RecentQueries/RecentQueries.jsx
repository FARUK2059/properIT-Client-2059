import { useLoaderData } from "react-router-dom";




const RecentQueries = () => {
    const allQuery = useLoaderData();
    console.log(allQuery);


    return (
        <div>
            <p className="mt-8 text-5xl font-black"> Recent Add Queries</p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 justify-center items-center">

                {
                    allQuery.map((rec) => <div key={rec._id}>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={rec.productimageURL} alt="Shoes" className="rounded-xl h-60 w-60" />
                            </figure>
                            <div className="card-body">

                                <h2 className="card-title  justify-center">{rec.querytitle}</h2>
                                <div className="text-start">
                                    <p>Recommend Product Name : <span>{rec.productName}</span></p>
                                    <p>Recommend Product Name : <span>{rec.productBrand}</span></p>
                                    <p>Recommendation Reason : <span>{rec.boycotdescription}</span></p>
                                    <p>Recommend Date : <span> {rec.datetime} </span></p>
                                </div>
                                <div className="p-2 mt-4">
                                    <h2 className="text-start text-lg font-bold">Recommender Information :</h2>
                                    <div className="flex gap-4 justify-between mt-4">
                                        <div>
                                            <img alt="" src={rec.userimageURL} className="object-cover w-12 h-12 rounded-md shadow dark:bg-gray-500" />
                                        </div>
                                        <div className="flex flex-col space-y-1 text-end">
                                            <p className="text-sm font-semibold">Name: <span>{rec.username}</span></p>
                                            <p className="text-sm font-semibold">Email: <span>{rec.email}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)
                }


            </div>

        </div>
    );
};

export default RecentQueries;