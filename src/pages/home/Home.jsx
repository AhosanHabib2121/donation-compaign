import { useState } from "react";
import Banner from "../../components/banner/Banner";
import Featured from "../../components/featured/Featured";

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    
    const handleSearch = (e) => {
        e.preventDefault();
        const getInputValue = e.target.categoryName.value;
        setInputValue(getInputValue)
    }
    return (
        <div>
            {/* banner area here */}
            <div>
                <Banner handleSearch={handleSearch} />
            </div>
            {/* featured area here */}
            <div className="mt-20 mb-24 md:mx-24 mx-10">
                <Featured inputValue={inputValue } />
            </div>
        </div>
    );
};

export default Home;