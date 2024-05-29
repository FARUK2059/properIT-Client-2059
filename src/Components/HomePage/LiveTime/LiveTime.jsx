import { useEffect, useState } from "react";


const LiveTime = () => {

    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);


    return (
        <div className="mt-20 p-10">
            <h2 className="text-4xl font-bold">Live Time</h2>
            <div>
                <div className="lg:text-7xl text-5xl font-extrabold text-green-700 p-8">{clockState}</div>;

            </div>
        </div>
    );
};

export default LiveTime;
