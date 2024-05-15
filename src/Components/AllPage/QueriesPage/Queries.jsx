import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css'



const Queries = () => {
    const { updateTitle } = useAuth();
    const allQueries = useLoaderData();
    // console.log(allQueries);

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

    const handleReset = () => {
        setSearch('');
        setFilteredQueries(allQueries);
    };



    return (
        <div>

            {/* Serch functionality section */}
            <div className="">

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
                    <button onClick={handleReset} className="btn btn-warning hover:bg-primary hover:text-white">Reset</button>
                </div>

            </div>

            {/* Tab section */}
            <div>
                <div className="hidden sm:block">
                    <Tabs>
                        <div className="flex ">
                            <TabList>
                                <div role="tablist" className="flex gap-2 tabs tabs-lifted">
                                    <Tab><a role="tab" className="tab tab-active [--tab-bg:yellow] [--tab-border-color:orange] text-primary">Column Layout 3</a></Tab>
                                    <Tab><a role="tab" className="tab">Column Layout 2</a></Tab>
                                </div>
                            </TabList>
                        </div>

                        <div className="">

                            {/*First Column Grid Layout  */}
                            <TabPanel>
                                {/* Map data section */}
                                <div className="grid justify-center p-2 mt-6 mb-6">

                                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

                                        {
                                            filteredQueries.map((qury) => <div key={qury._id}>

                                                <div className="card flex p-4 max-h-screen  rounded-lg  border">

                                                    {/* Querie IMG and Title */}
                                                    <div className="grid justify-center r">
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
                                                        <div className="grid justify-center mt-4">
                                                            <Link to={`/recommend/${qury._id}`}><button className="btn btn-error">Recommend</button></Link>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>)
                                        }
                                    </div>

                                </div>
                            </TabPanel>

                            {/*2nd Column Grid Layout  */}
                            <TabPanel>
                                {/* Map data section */}
                                <div className="grid justify-center p-2 mt-6 mb-6">

                                    <div className="grid lg:grid-cols-2  gap-6">

                                        {
                                            filteredQueries.map((qury) => <div key={qury._id}>

                                                <div className="card flex p-4 max-h-screen  rounded-lg  border">

                                                    {/* Querie IMG and Title */}
                                                    <div className="grid justify-center r">
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
                                                        <div className="grid justify-center mt-4">
                                                            <Link to={`/recommend/${qury._id}`}><button className="btn btn-error">Recommend</button></Link>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>)
                                        }
                                    </div>

                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>

            {/* Map data section */}
            <div className="grid justify-center p-2 mt-6 mb-6 lg:hidden md:hidden">

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

                    {
                        filteredQueries.map((qury) => <div key={qury._id}>

                            <div className="card flex p-4 max-h-screen  rounded-lg  border">

                                {/* Querie IMG and Title */}
                                <div className="grid justify-center r">
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
                                    <div className="grid justify-center mt-4">
                                        <Link to={`/recommend/${qury._id}`}><button className="btn btn-error">Recommend</button></Link>
                                    </div>
                                </div>

                            </div>

                        </div>)
                    }
                </div>

            </div>

            {/* Pagination section */}
            <div className="justify-center grid p-4 mb-4">
                <div className="flex">
                    <a  className="px-4 py-2 mx-1  rounded-md cursor-not-allowed border">
                        <div className="flex items-center -mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path   d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>

                            <span className="mx-1">
                                previous
                            </span>
                        </div>
                    </a>

                    <a  className="hidden px-4 py-2 mx-1  transition-colors duration-300 transform  sm:inline   hover:bg-blue-500  hover:text-white rounded-md border  ">
                        1
                    </a>

                    <a  className="hidden px-4 py-2 mx-1  transition-colors duration-300 transform  sm:inline   hover:bg-blue-500  hover:text-white rounded-md border ">
                        2
                    </a>

                    <a  className="hidden px-4 py-2 mx-1  transition-colors duration-300 transform  sm:inline   hover:bg-blue-500  hover:text-white rounded-md border ">
                        3
                    </a>

                    <a  className="hidden px-4 py-2 mx-1  transition-colors duration-300 transform  sm:inline   hover:bg-blue-500  hover:text-white rounded-md border ">
                        4
                    </a>

                    <a  className="hidden px-4 py-2 mx-1  transition-colors duration-300 transform  sm:inline   hover:bg-blue-500  hover:text-white rounded-md border ">
                        5
                    </a>

                    <a  className="px-4 py-2 mx-1  transition-colors duration-300 transform  rounded-md   hover:bg-blue-500  hover:text-white border">
                        <div className="flex items-center -mx-1">
                            <span className="mx-1">
                                Next
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path   d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Queries;