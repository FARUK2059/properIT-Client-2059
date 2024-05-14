import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";

import { LuUser2 } from "react-icons/lu";

import itLogo from "../../../public/information-technology.png";



const Navbar = () => {

    const { user, logOut } = useAuth();

    const [theme, setTheme] = useState('light')



    // set theme state in localStorage on mount & also update localStorage on state change
    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        setTheme(localTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("night");
        } else {
            setTheme("light");
        }
    };

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("Your LogOut successfull")
            })
            .catch()
    }

    const links = <>

        <li><NavLink className="hover:bg-gray-600 hover:text-slate-100" to="/">Home</NavLink></li>
        <li><NavLink className="hover:bg-gray-600 hover:text-slate-100" to="/queries">Queries</NavLink></li>

        {
            user && <>
                <li><NavLink className="hover:bg-gray-600 hover:text-slate-100" to="/recommendforme">Recommendations For Me</NavLink></li>
                <li><NavLink className="hover:bg-gray-600 hover:text-slate-100" to="/myqueries">My Queries</NavLink></li>
                <li><NavLink className="hover:bg-gray-600 hover:text-slate-100" to="/myrecomendation">My Recommendations</NavLink></li>
            </>
        }

        <li>
            <div>
                <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller dark:bg-blue-400 bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2" />
            </div>
        </li>
    </>


    return (
        <div>
            <div className="" >
                <div className="navbar items-center ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm relative dropdown-content z-50 p-2 shadow bg-slate-400 hover:bg-slate-300 text-black  rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost font-bold hover:text-yellow-600 hover:bg-pink-950 text-green-700 text-2xl"><span><img className="h-12 w-12" src={itLogo} alt="" /></span>ProperIT</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 ">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end gap-2">
                        {
                            user ?
                                <Link to="/">
                                    <div className="tooltip tooltip-left " data-tip={user?.displayName || "not found"}>
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-4">
                                            <div className="w-10 rounded-full border border-black">
                                                <img referrerPolicy="no-referrer" alt="null " src={user?.photoURL} />
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                                : null
                        }

                        {
                            user ? <Link to="/"><button onClick={handleSignOut} className="btn btn-active hover:btn-accent btn-primary rounded-lg"> <LuUser2 />Log Out</button></Link> :
                                <Link to="/login"><button className="btn btn-active btn-primary hover:btn-accent rounded-lg"><LuUser2 />Login</button></Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;