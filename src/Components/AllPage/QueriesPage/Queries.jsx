import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";



const Queries = () => {
    const { updateTitle } = useAuth();
    const allQueries = useLoaderData();
    // console.log(allQueries);
    const [searchText, setSearchText] = useState('');
    const [search, setSearch] = useState('');
    console.log(search);



    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle(' Queries | ProperIT');
    }, [updateTitle]);

    // useEffect(() => {
    // fetch(`http://localhost:5000/all-query?productName=${searchText}`)
    //     .then(res => res.json())
    //     .then(data => setSerchData(data))
    // }, [ searchText])

    const handleSearchQuery = e => {
        e.preventDefault()

        setSearch(searchText)

    }

    return (
        <div>

            {/* Serch functionality section */}
            <div>
                {/* <form onSubmit={handleSearch}>
                    <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                            // type='text'
                            // onChange={e => setSearchText(e.target.value)}
                            // value={searchText}
                            // name='search'
                            // placeholder='Enter Job Title'
                            // aria-label='Enter Job Title'
                        />

                        <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                            Search
                        </button>
                    </div>
                </form> */}
            </div>

            <div>
                <div className="flex gap-2 justify-center p-6">
                    <form onSubmit={handleSearchQuery} className="flex gap-2">
                        <input type="text"
                            onChange={e => setSearchText(e.target.value)}
                            value={searchText}
                            name='search'
                            placeholder='Enter Query  Name'
                            aria-label='Enter Query Product Name'
                            className="input input-bordered input-primary w-full max-w-xs" />
                        <button className="btn btn-primary hover:bg-warning hover:text-black">Serch</button>
                    </form>
                    <button className="btn btn-warning hover:bg-primary hover:text-white">Reset</button>
                </div>
            </div>

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