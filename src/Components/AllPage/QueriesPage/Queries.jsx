import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";



const Queries = () => {
    // const { loading } = useAuth();
    const { updateTitle } = useAuth();
    const allQueries = useLoaderData();
    // console.log(allQueries);
    // const [searchText, setSearchText] = useState('');
    const [filteredQueries, setFilteredQueries] = useState([]);
    const [search, setSearch] = useState('');
    // console.log(search);

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle(' Queries | ProperIT');
    }, [updateTitle]);

    useEffect(() => {
        setFilteredQueries(allQueries);
    }, [allQueries]);

    const handleSearchQuery = e => {
        e.preventDefault()
        const searchText = e.target.value.toLowerCase();
        setSearch(searchText)
        const filteredData = allQueries.filter((query) =>
            query.
                productName.toLowerCase().includes(searchText)
        );
        setFilteredQueries(filteredData);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const filteredData = allQueries.filter((query) =>
            query.productName.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredQueries(filteredData);
    };

    // if () {
    //     return <div><span className="loading loading-spinner text-warning"></span></div>
    // }

    return (
        <div>

            {/* Serch functionality section */}
            <div>
                <div className="flex gap-2 justify-center p-6">
                    <form onSubmit={handleSubmit} className="flex gap-2">
                        <input type="text"
                            onChange={handleSearchQuery}
                            value={search}
                            name='search'
                            placeholder='Enter Query  Name'
                            aria-label='Enter Query Product Name'
                            className="input input-bordered input-primary w-full max-w-xs" />
                        {/* <button type="submit" className="btn btn-primary hover:bg-warning hover:text-black">Serch</button> */}
                    </form>
                    {/* <button className="btn btn-warning hover:bg-primary hover:text-white">Reset</button> */}
                </div>
            </div>

            {/* Map data section */}
            <div className="grid justify-center p-2 mt-6 mb-6">

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {
                        filteredQueries.map((qury) => <div key={qury._id}>

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