import moment from "moment";
import useAuth from "../../../Hooks/useAuth";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";



const AddRecommend = () => {
    const { user } = useAuth();

    const allQuerys = useLoaderData();

    const { id } = useParams(allQuerys);
    const querys = allQuerys?.find((query) => query._id === id)
    // console.log(querys);

    const { productName, querytitle, userimageURL, username, email, _id } = querys;



    const handleAddRecomandation = e => {
        e.preventDefault();
        const form = e.target;

        const recommendTitle = form.recommendTitle.value;
        const recommendProductName = form.recommendProductName.value;
        const recommendProductimageURL = form.recommendProductimageURL.value;
        const recommendationReason = form.recommendationReason.value;
        const recommenderName = form.recommenderName.value;
        const recommenderEmail = form.recommenderEmail.value;
        const recommenderImageURL = form.recommenderImageURL.value;
        const recommenddatetime = form.recommenddatetime.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const userImageURL = form.userImageURL.value;
        const queryTitle = form.queryTitle.value;
        const productName = form.productName.value;
        const queryId = form.queryId.value;

        const addRecommend = { recommendTitle, recommendProductName, recommendProductimageURL, recommendationReason, recommenderName, recommenderEmail, recommenderImageURL, recommenddatetime, userName, userEmail, queryTitle, productName, queryId, userImageURL }

        console.log(addRecommend);

        // Send Data to the server
        fetch('http://localhost:5000/recommends', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addRecommend)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    e.target.reset();
                    Swal.fire({
                        title: 'success',
                        text: 'Recommend successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                        
                    })
                }
            })

    }


    return (
        <div>
            <div>
                <section>

                    {/* Title */}
                    <div>
                        <div className="mt-4 p-4">
                            <h1 className="mb-5 text-4xl p-2  font-bold">Add Recomandation</h1>
                            <p className="mb-5 text-xl font-semibold  ">wooden spoons, spatulas, and ladles for cooking and serving.</p>
                        </div>
                    </div>

                    <form onSubmit={handleAddRecomandation} className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">

                            <div className="grid grid-cols-6 gap-4 col-span-full">

                                {/* Recommendation Title */}
                                <div className="col-span-full  hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Recommendation Title</label>
                                    <input type="text" name="recommendTitle" placeholder="Inpute recommendation title" className="w-full rounded-md focus:ring border focus:ring-opacity-75  p-2" required />
                                </div>

                                {/* Recommended product Name */}
                                <div className="col-span-full  hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Recommended product Name</label>
                                    <input type="text" name="recommendProductName" placeholder="Inpute recommended product name" className="w-full rounded-md focus:ring border focus:ring-opacity-75  p-2" required />
                                </div>

                                {/* Recommended Product Image */}
                                <div className="col-span-full hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Recommended Product Image URL</label>
                                    <input type="url" name="recommendProductimageURL" placeholder="Input Recommended Product URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 border  p-2" />
                                </div>

                                {/* Recommendation reason */}
                                <div className="col-span-full hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Recommendation Reason</label>
                                    <textarea name="recommendationReason" placeholder="Type recommendation reason" className="w-full rounded-md focus:ring focus:ring-opacity-75  border h-28 p-2"></textarea>
                                </div>

                                {/* Hidden item */}

                                {/* Recommender Name */}
                                <div className="col-span-full hidden sm:col-span-3 hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Recommender Name</label>
                                    <input type="text" name="recommenderName" value={user.displayName} placeholder="Inpute your name" className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 border" />
                                </div>

                                {/* Recommender Email */}
                                <div className="col-span-full hidden sm:col-span-3 hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Recommender Email</label>
                                    <input type="text" name="recommenderEmail" value={user.email} placeholder="Inpute your email" className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 border" required />
                                </div>

                                {/* User Image URL */}
                                <div className="hidden col-span-full hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">User Image URL</label>
                                    <input type="url" name="recommenderImageURL" value={user.photoURL} placeholder="Input user image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 border  p-2" />
                                </div>

                                {/* Current Date and time */}
                                <div className="col-span-full hidden sm:col-span-3 hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Current Date and Time</label>
                                    <input type="text" name="recommenddatetime" value={moment().format('LLL')} className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 border" required />
                                </div>

                                {/* Hidden Query Information section */}

                                {/* Query Creator Name */}
                                <div className="col-span-full hidden sm:col-span-3 hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Query Creator Name</label>
                                    <input type="text" name="userName" value={username} placeholder="Inpute " className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 border" required />
                                </div>

                                {/* Query Creator Email */}
                                <div className="col-span-full hidden sm:col-span-3 hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Query Creator Email</label>
                                    <input type="text" name="userEmail" value={email} placeholder="Inpute " className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 border" required />
                                </div>

                                {/* Query Creator Image URL */}
                                <div className="hidden col-span-full hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">User Image URL</label>
                                    <input type="url" name="userImageURL" value={userimageURL} placeholder="Input user image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 border  p-2" />
                                </div>

                                {/* Query Title */}
                                <div className="col-span-full hidden sm:col-span-3 hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Query Title</label>
                                    <input type="text" name="queryTitle" value={querytitle} placeholder="Inpute " className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 border" required />
                                </div>

                                {/* Query Product Name */}
                                <div className="col-span-full hidden sm:col-span-3 hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Query Product Name</label>
                                    <input type="text" name="productName" value={productName} placeholder="Inpute " className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 border" required />
                                </div>

                                {/* Query ID */}
                                <div className="col-span-full hidden sm:col-span-3 hover:border rounded-md lg:p-6 p-2  hover:bg-orange-50">
                                    <label className="text-md grid text-start p-2">Query ID</label>
                                    <input type="text" name="queryId" value={_id} placeholder="Inpute " className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 border" required />
                                </div>

                                {/* Submit Button */}
                                <div className="form-control col-span-full">
                                    <input type="submit" value="Add Recommendation" className="btn btn-secondary w-full px-8 py-3 font-semibold rounded bg-green-700 text-white mb-4 border-none" />
                                </div>

                            </div>

                        </fieldset>
                    </form>

                </section>
            </div>
        </div>
    );
};

export default AddRecommend;