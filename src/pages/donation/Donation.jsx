import { useState } from "react";
import DonationItem from "../../components/donationItem/DonationItem";

const Donation = () => {
    const getDonateData = JSON.parse(localStorage.getItem('donateInfo'));
    const [cardDisplay, setCardDisplay] = useState(4)

    return (
        <div className="mx-10 md:mx-24 mt-8 mb-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    getDonateData.slice(0,cardDisplay).map(donateData => <DonationItem key={donateData.id} donateData={donateData} />)
                }
            </div>
            <div className={`text-center mt-10 ${cardDisplay === getDonateData.length && 'hidden'}`}>
                <button onClick={() => setCardDisplay(getDonateData.length)} className="btn px-6 hover:bg-[#08763b] text-white text-base font-semibold  normal-case bg-[#009444]">See all</button>
            </div>
        </div>
    );
};

export default Donation;