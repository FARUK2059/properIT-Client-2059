import FutureGalary from "./ExtraSection/FutureGalary";
import OurService from "./ExtraSection/OurService";
import RecentQueries from "./RecentQueries/RecentQueries";
import Slider from "./SliderBanner/Slider";


const Home = () => {
    return (
        <div>
            
            {/* Slider and banner section */}
            <div>
                <Slider></Slider>
            </div>

            {/* Resent Queries section */}
            <div>
                <RecentQueries></RecentQueries>
            </div>

            {/* 1st extra section (Web Servic) */}
            <div>
                <OurService></OurService>
            </div>

            {/* 2nd extra section (Futures Galary) */}
            <div>
                <FutureGalary></FutureGalary>
            </div>

        </div>
    );
};

export default Home;