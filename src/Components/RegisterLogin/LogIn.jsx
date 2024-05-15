
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { AuthContext } from "../Autentication/AuthProvider/AuthProvider";


const LogIn = () => {

    const { signInUser, user, logOut, updateTitle, googleLogIn } = useAuth();
    // const { signInUser, user, logOut, updateTitle, googleLogIn } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');


    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle('Login | ProperIT');
    }, [updateTitle]);

    // Navigation System
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(navigate, location);


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Your LogIn successfull")

                // navigat;
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error)
                setPasswordError("Inpute currect password")
            })
    }

    // Google LogIn
    const handleGoogleSignIn = () => {
        // console.log("google  coming sooooooon");
        googleLogIn()
            .then(() => {
                // console.log(result.user);
                toast.success("Your LogIn successfully");
                // navigat;
                navigate(location?.state ? location.state : '/');

            })
            .catch( () => {
                // console.log(error)
                toast.error("Your login faild")
            })
    }

    // sign Out/ Log out section
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
                toast.success("LogOut successfully")
                // navigat(forms);
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.log(error)
                toast.error("logOut faild")
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src="" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div>
                                        <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 text-yellow-600 dark:bg-gray-50 dark:text-gray-800 border focus:dark:border-violet-600" required />
                                        <span className="absolute mt-4 right-10" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                                        <div className="label ">
                                            <span className="label-text-alt text-yellow-400">{passwordError}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control mt-6 mb-4">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='my-4 text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to="/register">Sign Up</Link> </p>
                            <div className="flex flex-col w-full">
                                <div className="divider divider-warning ">OR</div>
                            </div>
                            <h2 className="text-white font-medium text-lg">SingIn With account</h2>
                            {
                                user ?
                                    <button onClick={handleLogOut} className="btn btn-accent">Sign Out</button> :
                                    <div className="flex gap-4 p-2 justify-center">
                                        <button onClick={handleGoogleSignIn} className="btn btn-primary hover:btn-warning"><span className=""><FcGoogle /></span> Google</button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;