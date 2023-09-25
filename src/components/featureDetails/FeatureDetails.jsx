import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const FeatureDetails = () => {
    const singleData = useLoaderData();
    const { featureId } = useParams();
    const id = parseInt(featureId);
    const detailsData = singleData.find(data => data.id === id);
    const { picture, title, description, text_color, price } = detailsData
    
    const handleDonate = () => {
        const donateDataStor = [];
        const getDonateLS = JSON.parse(localStorage.getItem('donateInfo'));
        if (!getDonateLS) {
            donateDataStor.push(detailsData)
            localStorage.setItem('donateInfo', JSON.stringify(donateDataStor))
            Swal.fire({
                icon: 'success',
                title: 'Good',
                text: 'Donation is completed!',
            })
        }
        else {
            const isExists = getDonateLS.find(getDonateId => getDonateId.id === id)
            if (!isExists) {
                donateDataStor.push(...getDonateLS, detailsData)
                localStorage.setItem('donateInfo', JSON.stringify(donateDataStor))
                Swal.fire({
                    icon: 'success',
                    title: 'Good',
                    text: 'Donation is completed!',
                })
            }
            else {
                 Swal.fire({
                    icon: 'error',
                    title: 'Wrong try',
                    text: 'Already exists!',
                 })
            }
        }
    }

    return (
        <div className="card card-compact mt-8 mb-24 md:mx-24 mx-10">
            <div className="relative mb-12">
                <figureure><img className="w-full " src={picture} alt="not found" /></figureure>
                <div className="absolute bg-[#0B0B0B80] w-full bottom-0 px-6 py-5">
                    <button onClick={handleDonate} className="text-white px-5 py-3 text-xl font-semibold rounded" style={{background:`${text_color}`}}>Donate ${ price}</button>
                </div>
            </div>
            <div>
                <h2 className="card-title pb-4 text-[#0B0B0B] text-4xl font-bold">{title}</h2>
                <p className="text-[#0B0B0BB2] text-base font-normal text-justify leading-8">{description }</p>
               
            </div>
        </div>
    );
};

export default FeatureDetails;