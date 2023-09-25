import './Banner.css'

const Banner = () => {
    return (
        <div className="bannerBg">
            <div className='grid justify-center items-center h-[600px]'>
                <div className='space-y-10'>
                    <h2 className='text-[#0B0B0B] font-bold text-4xl text-center md:text-left'>I Grow By Helping People In Need</h2>
                    <div className="form-control">
                        <div className="input-group justify-center">
                            <input type="text" placeholder="Search here…" className="input input-bordered focus:outline-none w-3/5" />
                            <button className="btn text-white text-base font-semibold hover:bg-[#ef3037] normal-case bg-[#FF444A]">
                                Search
                            </button>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Banner;