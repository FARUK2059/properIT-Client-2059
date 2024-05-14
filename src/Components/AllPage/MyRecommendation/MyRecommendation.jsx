// import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";




const MyRecommendation = () => {

    const { user, updateTitle } = useAuth();
    const myRecommend = useLoaderData();
    // console.log(myRecommend);
    const userRecommand = myRecommend?.filter((recomand) => recomand?.recommenderEmail === user?.email);
    console.log(userRecommand);

    const [userRecommends, setUserRecommends] = useState(userRecommand);

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle(' Recommend By ID | ProperIT');
    }, [updateTitle]);

    // Delete Function 
    const handleDeleteRecommend = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`${import.meta.env.VITE_API_URL}/recommends/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Recommend has been deleted.",
                                    icon: "success"
                                });
                                const remainig = userRecommand.filter(reco => reco._id !== _id);
                                setUserRecommends(remainig);
                            }
                        })
                }
            });
    }


    return (
        <div className="mt-10 mb-10">

            {
                userRecommends?.length ?

                    <div className="container p-2 mx-auto ">
                        <h2 className="mb-4 text-2xl font-semibold leading-tight">My Recommendation : {userRecommends.length}</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-xs">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col className="" />
                                </colgroup>
                                <thead className="">
                                    <tr className="text-left">
                                        <th className="p-3">Recommend Product Image</th>
                                        <th className="p-3">Recommend Title</th>
                                        <th className="p-3">Recommend Product Name</th>
                                        <th className="p-3">Recomment Date</th>
                                        <th className="p-3 ">Query Name</th>

                                        <th className="p-3">Action</th>
                                    </tr>
                                </thead>

                                {
                                    userRecommends.map((user) => <tbody key={user._id}>


                                        <tr className="border-b border-opacity-20 text-start hover:bg-green-100 hover:text-black">
                                            <td className="p-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={user.recommendProductimageURL} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-3">
                                                <p>{user.recommendTitle}</p>
                                            </td>
                                            <td className="p-3">
                                                <p className="dark:text-gray-600">{user.recommendProductName}</p>
                                            </td>
                                            <td className="p-3">
                                                <p className="dark:text-gray-600">{user.recommenddatetime}</p>
                                            </td>

                                            <td className="p-3">
                                                <p className="dark:text-gray-600">{user.productName}</p>
                                            </td>

                                            <td className="p-3">
                                                <div onClick={() => handleDeleteRecommend(user._id)} >
                                                    <button className="btn btn-sm">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>)
                                }


                            </table>
                        </div>
                    </div>

                    :

                    <div>
                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                    <h1 className="text-5xl font-bold">You have not recommended in any query</h1>
                                </div>
                            </div>
                        </div>
                    </div>
            }



        </div>
    );
};

export default MyRecommendation;