import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect } from "react";



const RecommendForMe = () => {

    const { user, updateTitle } = useAuth();
    // console.log(user);

    const recommendMe = useLoaderData();
    // console.log(recommendMe);

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle(' Recommend For Me | ProperIT');
    }, [updateTitle]);

    const recommandMes = recommendMe?.filter((recomand) => recomand?.userEmail === user?.email);
    console.log(recommandMes);


    return (
        <div>
            <div className="mt-10 mb-10">

                <div className="container p-2 mx-auto ">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight"> Recommendation For Me : {recommandMes.length}</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />
                            </colgroup>
                            <thead className="">
                                <tr className="text-left">
                                    <th className="p-3">Product Image</th>
                                    <th className="p-3">Recommend Title</th>
                                    <th className="p-3">Recommend Product Name</th>
                                    <th className="p-3">Current Time-Stamp</th>
                                    <th className="p-3">Recommender Name</th>
                                    <th className="p-3 items-center text-center">Recommender Image</th>
                                </tr>
                            </thead> 

                            {
                                recommandMes.map((user) => <tbody key={user._id}>


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
                                            <p className="dark:text-gray-600">{user.recommenderName}</p>
                                        </td>
                                        <td className="p-3 items-center text-center">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.recommenderImageURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>


                                    </tr>
                                </tbody>)
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendForMe;