import PropTypes from 'prop-types';

const SingleFeatureData = ({ singleFeatureData }) => {
    const {picture, title, category, color_category_bg, color_card_bg, text_color} = singleFeatureData;
    
    return (
        <div className="card rounded-t-lg rounded-b-none " style={{background:`${color_card_bg}`}}>
            <figure><img src={picture} alt="not found" className='w-full h-44' /></figure>
            <div className="card-body px-3 space-y-2 pb-4">
                <div>
                    <button className='px-3 py-1 rounded text-sm font-medium'  style={{ color:`${text_color}`,background:`${color_category_bg}`}}>{category}</button>
                </div>
                <h2 className="card-title text-xl font-semibold " style={{ color:`${text_color}`}}>{title}</h2>
            </div>
        </div>
    );
};
SingleFeatureData.propTypes = {
    singleFeatureData: PropTypes.object.isRequired
}
export default SingleFeatureData;