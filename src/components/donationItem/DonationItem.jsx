import PropTypes from 'prop-types';

const DonationItem = ({ donateData }) => {
    const {picture, title, category, color_category_bg, color_card_bg, text_color,price } = donateData;
    return (
        <div className="card card-side rounded-lg h-56" style={{background:`${color_card_bg}`}}>
            <figure><img src={picture} alt="not found" className='w-60 h-56 '/></figure>
            <div className="card-body pl-4 pr-1">
                <div>
                    <button className="card-title text-sm font-normal p-2 rounded" style={{color:`${text_color}`,background:`${color_category_bg}`}}>{ category }</button>
                </div>
                <div>
                    <h2 className='text-[#0B0B0B] text-2xl font-semibold' >{title}</h2>
                    <h3 className='text-base  font-semibold' style={{color:`${text_color}`}}>${ price }</h3>
                </div>
                <div className="card-actions ">
                <button className="btn text-white normal-case" style={{background:`${text_color}`}}>View Details</button>
                </div>
            </div>
        </div>
    );
};
DonationItem.propTypes = {
    donateData:PropTypes.object.isRequired
}
export default DonationItem;