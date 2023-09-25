import { useEffect, useState } from "react";
import SingleFeatureData from "../singleFeatureData/SingleFeatureData";

const Featured = () => {
    const [featuredData, setFeaturedData] = useState([]);
    useEffect(() => {
        fetch('../../../donationData.json')
            .then(res => res.json())
            .then(allData => setFeaturedData(allData))  
    }, [])
    console.log(featuredData)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                featuredData.map(singleFeatureData => <SingleFeatureData key={singleFeatureData.id} singleFeatureData={singleFeatureData} />)
            }
        </div>
    );
};  

export default Featured;