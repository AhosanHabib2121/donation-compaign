import Banner from "../../components/banner/Banner";
import Featured from "../../components/featured/Featured";

const Home = () => {
    return (
        <div>
            {/* banner area here */}
            <div>
                <Banner/>
            </div>
            {/* featured area here */}
            <div className="mt-20 mb-24 mx-24">
                <Featured/>
            </div>
        </div>
    );
};

export default Home;