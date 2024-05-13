import moment from "moment";
import { useEffect } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Update = () => {

    const { updateTitle } = useAuth();

    const updateQueryData = useLoaderData();
    console.log(updateQueryData);

    const { productName, productBrand, productimageURL, querytitle, boycotdescription,  _id } = updateQueryData;

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle('My Query Update | ProperIT');
    }, [updateTitle]);

    const handleUpdateQuery = e => {
        e.preventDefault();
        const form = e.target;

        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const productimageURL = form.productimageURL.value;
        const querytitle = form.querytitle.value;
        const boycotdescription = form.boycotdescription.value;
        const datetime = form.datetime.value;


        const querie = { productName, productBrand, productimageURL, querytitle, boycotdescription, datetime }
        console.log(querie);

        // Update query function and send to bongoDB
        fetch(`http://localhost:5000/queries/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(querie)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Query Updated successfully',
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

                    <form onSubmit={handleUpdateQuery} className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">

                            <div className="grid grid-cols-6 gap-4 col-span-full">

                                {/* Product Name */}
                                <div className="col-span-full  hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Product Name</label>
                                    <input type="text" name="productName" defaultValue={productName} placeholder="Inpute Product name" className="w-full rounded-md focus:ring border focus:ring-opacity-75  p-2" required />
                                </div>

                                {/* Product Brand */}
                                <div className="col-span-full  hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Product Brand Name</label>
                                    <input type="text" name="productBrand" defaultValue={ productBrand} placeholder="Inpute product brand name" className="w-full rounded-md focus:ring border focus:ring-opacity-75  p-2" required />
                                </div>

                                {/* Product Image URL */}
                                <div className="col-span-full hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Product Image URL</label>
                                    <input type="url" name="productimageURL" defaultValue={productimageURL} placeholder="Input product image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 border  p-2" />
                                </div>

                                {/* Samilar Product Brand */}
                                <div className="col-span-full  hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Query Title</label>
                                    <input type="text" name="querytitle" defaultValue={querytitle} placeholder="Inpute samilar product brand or query title" className="w-full rounded-md focus:ring border focus:ring-opacity-75  p-2" required />
                                </div>


                                {/* Boycoting Reason Details */}
                                <div className="col-span-full hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Boycoting Reason Details</label>
                                    <textarea name="boycotdescription" defaultValue={boycotdescription} placeholder="Type Boycoting Reason Details" className="w-full rounded-md focus:ring focus:ring-opacity-75  border h-28 p-2"></textarea>
                                </div>

                                {/* Hidden item */}

                                {/* Current Date and time */}
                                <div className="col-span-full hidden sm:col-span-3 hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Current Date and Time</label>
                                    <input type="text" name="datetime" defaultValue={moment().format('LLL')}  placeholder="Inpute your email" className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 border" required />
                                </div>

                                {/* Submit Button */}
                                <div className="form-control col-span-full">
                                    <input type="submit" value="Add" className="btn btn-secondary w-full px-8 py-3 font-semibold rounded bg-green-700 text-white mb-4 border-none" />
                                </div>

                            </div>

                        </fieldset>
                    </form>

                </section>
            </div>
            
            <div className="p-8">
                <Link to="/myqueries"><button className="btn btn-primary">Back to My Queries </button></Link>
            </div>

        </div>
    </div>
);
};

export default Update;