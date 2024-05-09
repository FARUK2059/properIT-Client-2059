import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Register = () => {

    const { createUser, updateUserProfile, updateTitle } = useAuth();

    const [errorName, setErrorname] = useState('');
    const [errorpassword, setErrorPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Navigation System
    const location = useLocation();
    const navigat = useNavigate();

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle('Register | ProperIT');
    }, [updateTitle]);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        if (!/[A-Z]/.test(name)) {
            setErrorname('Your name should have  Upper cash carecter')
            return;
        }

        if (password.length < 6) {
            setErrorPassword('Password should be at last 6 characters');
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            setErrorPassword('Your password should have at last on Upper cash carecter')
            return;
        }

        else if (!/[a-z]/.test(password)) {
            setErrorPassword('Your password should be have last on Lower cash carecter')
            return;
        }

        // Creat user setup
        createUser(email, password)
            .then(result => {

                console.log(result.user)
                navigat(location?.state ? location.state : '/');
                updateUserProfile(name, photo)
                    .then(() => {
                        toast.success("Your Registation and Login successfull")
                    })
            })
            .catch(error => {
                console.log(error)
                // toast.error("You already registered, Please back to home")
            })

    }

    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="w-1/2 mr-12">
                            <img src="" alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                                <form onSubmit={handleSignUp}>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                        <div className="label ">
                                            <span className="label-text-alt text-red-400">{errorName}</span>
                                        </div>
                                    </div>

                                    {/* Photo URL */}
                                    <div className=" text-sm text-center">
                                        <label className="label">
                                            <span className="label-text text-blue-200 font-medium">Photo URL</span>
                                        </label>
                                        <input type="text" name="photo" id="photo" placeholder="Enter your photo URL" className="w-full px-1 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border  focus:dark:border-violet-600" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <div className="relative">
                                            <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border text-yellow-600 focus:dark:border-violet-600" required />
                                            <span className="absolute mt-4 lg:right-4 right-4 md:right-4" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                                            <div className="label ">
                                                <span className="label-text-alt text-red-400">{errorpassword}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                                    </div>
                                </form>
                                <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;