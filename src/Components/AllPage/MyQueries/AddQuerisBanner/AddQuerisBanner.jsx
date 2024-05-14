import { Link } from "react-router-dom";



const AddQuerisBanner = () => {
    return (
        <div>
            <div className="hero  " style={{ backgroundImage: 'url(https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Add Your Query</h1>
                        <p className="mb-5"> It covers the benefits, challenges, and best practices for implementing agile</p>

                        {/* Add Queries Button */}
                        <div>
                            <Link to="/addmyqueries"
                                className="group inline-block transition hover:-rotate-2 hover:scale-110 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                                href="#">
                                <span
                                    className="block rounded-full bg-white px-8 py-3  text-sm font-medium group-hover:bg-transparent hover:text-black text-blue-500" > Add Queries </span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddQuerisBanner;