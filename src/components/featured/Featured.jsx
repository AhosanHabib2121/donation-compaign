import { useEffect, useState } from "react";
import SingleFeatureData from "../singleFeatureData/SingleFeatureData";
import PropTypes from 'prop-types';

const Featured = ({ inputValue }) => {
    const getInputData = inputValue.toUpperCase();
    const [featuredData, setFeaturedData] = useState([]);

    // input value filtering here
    const inputToFeatured = featuredData.filter(data => data.category.toUpperCase() == getInputData)

  
    useEffect(() => {
        fetch('../../../donationData.json')
            .then(res => res.json())
            .then(allData => setFeaturedData(allData))  
    }, [])

    useEffect(() => {
        if (inputToFeatured == '') {
            setFeaturedData(featuredData)
        }
        else {
            setFeaturedData(inputToFeatured)
        }
    },[inputToFeatured,featuredData])

    return (
     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                featuredData.map(singleFeatureData => <SingleFeatureData key={singleFeatureData.id} singleFeatureData={singleFeatureData} />)
            }
        </div>
    );
};  
Featured.propTypes = {
    inputValue: PropTypes.string
}
export default Featured;