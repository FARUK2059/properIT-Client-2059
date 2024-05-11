


const Details = () => {
    return (
        <div>
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
        </div>
    );
};

export default Details;