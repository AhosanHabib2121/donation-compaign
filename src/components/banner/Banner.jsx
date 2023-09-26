import PropTypes from 'prop-types';
import './Banner.css'

const Banner = ({handleSearch}) => {
    return (
        <div className="bannerBg">
            <div className='grid justify-center items-center h-[600px]'>
                <div className='space-y-10'>
                    <h2 className='text-[#0B0B0B] font-bold text-4xl text-center md:text-left'>I Grow By Helping People In Need</h2>
                    <div className="form-control">
                        <form onSubmit={handleSearch}>
                            <div className="input-group justify-center">
                                <input name='categoryName' type="text" placeholder="Search here…" className="input input-bordered focus:outline-none w-3/5" />
                                <button type='submit' className="btn text-white text-base font-semibold hover:bg-[#ef3037] normal-case bg-[#FF444A]">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handleSearch: PropTypes.func
}
export default Banner;