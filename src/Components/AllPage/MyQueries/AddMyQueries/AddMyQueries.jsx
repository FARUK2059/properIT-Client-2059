import { useEffect } from "react";
import useAuth from "../../../Hooks/useAuth";
import moment from "moment";
import Swal from "sweetalert2";



const AddMyQueries = () => {

    const { user, updateTitle } = useAuth();
    console.log(user);

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle('Add My Query | ProperIT');
    }, [updateTitle]);

    const handleAddQueries = e => {
        e.preventDefault();
        const form = e.target;

        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const productimageURL = form.productimageURL.value;
        const querytitle = form.querytitle.value;
        const boycotdescription = form.boycotdescription.value;
        const username = form.username.value;
        const email = form.email.value;
        const userimageURL = form.userimageURL.value;
        const datetime = form.datetime.value;
        // const recommendationCount = form.recommendationCount.value;


        const querie = { productName, productBrand, productimageURL, querytitle, boycotdescription, username, email, userimageURL, datetime, recommendationCount: 0 }
        console.log(querie);

        // Send Data to the server
        fetch('http://localhost:5000/queries', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(querie)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    e.target.reset();
                    Swal.fire({
                        title: 'success',
                        text: 'Querie Added successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })

    }

    return (
        <div>
            <div className=" ">
                <div>
                    <section className=" ">

                        {/* Title */}
                        <div>
                            <div className="mt-4 p-4">
                                <h1 className="mb-5 text-4xl p-2  font-bold">Add Query product</h1>
                                <p className="mb-5 text-xl font-semibold  ">wooden spoons, spatulas, and ladles for cooking and serving.</p>
                            </div>
                        </div>

                        <form onSubmit={handleAddQueries} className="container flex flex-col mx-auto space-y-12">
                            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">

                                <div className="grid grid-cols-6 gap-4 col-span-full">

                                    {/* Product Name */}
                                    <div className="col-span-full  hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                        <label className="text-md grid text-start p-2">Product Name</label>
                                        <input type="text" name="productName" placeholder="Inpute Product name" className="w-full rounded-md focus:ring border focus:ring-opacity-75  p-2" required />
                                    </div>

                                    {/* Product Brand */}
                                    <div className="col-span-full  hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                        <label className="text-md grid text-start p-2">Product Brand Name</label>
                                        <input type="text" name="productBrand" placeholder="Inpute product brand name" className="w-full rounded-md focus:ring border focus:ring-opacity-75  p-2" required />
                                    </div>

                                    {/* Product Image URL */}
                                    <div className="col-span-full hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                        <label className="text-md grid text-start p-2">Product Image URL</label>
                                        <input type="url" name="productimageURL" placeholder="Input product image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 border  p-2" />
                                    </div>

                                    {/* Samilar Product Brand */}
                                    <div className="col-span-full  hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                        <label className="text-md grid text-start p-2">Query Title</label>
                                        <input type="text" name="querytitle" placeholder="Inpute samilar product brand or query title" className="w-full rounded-md focus:ring border focus:ring-opacity-75  p-2" required />
                                    </div>


                                    {/* Boycoting Reason Details */}
                                    <div className="col-span-full hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                        <label className="text-md grid text-start p-2">Boycoting Reason Details</label>
                                        <textarea name="boycotdescription" placeholder="Type Boycoting Reason Details" className="w-full rounded-md focus:ring focus:ring-opacity-75  border h-28 p-2"></textarea>
                                    </div>

                                    {/* Hidden item */}

                                    {/* User Name */}
                                    <div className="col-span-full hidden sm:col-span-3 hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                        <label className="text-md grid text-start p-2">User Name</label>
                                        <input type="text" name="username" value={user.displayName} placeholder="Inpute your name" className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 border" />
                                    </div>

                                    {/* User Email */}
                                    <div className="col-span-full hidden sm:col-span-3 hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                        <label className="text-md grid text-start p-2">User Email</label>
                                        <input type="text" name="email" value={user.email} placeholder="Inpute your email" className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 border" required />
                                    </div>

                                    {/* User Image URL */}
                                    <div className="hidden col-span-full hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                        <label className="text-md grid text-start p-2">User Image URL</label>
                                        <input type="url" name="userimageURL" value={user.photoURL} placeholder="Input user image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 border  p-2" />
                                    </div>

                                    {/* Current Date and time */}
                                    <div className="col-span-full hidden sm:col-span-3 hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                        <label className="text-md grid text-start p-2">Current Date and Time</label>
                                        <input type="text" name="datetime" value={moment().format('LLL')} placeholder="Inpute your email" className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 border" required />
                                    </div>

                                    {/* recommendationCount */}
                                    {/* <div className="col-span-full hidden sm:col-span-3 hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                        <label className="text-md grid text-start p-2">recommendationCount</label>
                                        <input type="text" name="recommendationCount" value={0} placeholder="Inpute your recomandation" className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 border" required />
                                    </div> */}

                                    {/* Submit Button */}
                                    <div className="form-control col-span-full">
                                        <input type="submit" value="Add" className="btn btn-secondary w-full px-8 py-3 font-semibold rounded bg-green-700 text-white mb-4 border-none" />
                                    </div>

                                </div>

                            </fieldset>
                        </form>

                    </section>
                </div>
            </div>
        </div>
    );
};

export default AddMyQueries;