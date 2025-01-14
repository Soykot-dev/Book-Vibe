import bookBanner from '../../assets/book-banner.png'
const Banner = () => {
    return (
        <div className='flex gap-10 justify-center items-center bg-base-200 rounded-3xl py-16 mb-16'>
            <div className="">
                <h1 className="text-6xl font-prata font-black bg-gradient-to-r from-success via-primary to-error text-transparent bg-clip-text animate-gradient bg-300%">Books to freshen up</h1>
                <h1 className="mt-8 pl-1 pb-2 text-6xl font-prata font-black bg-gradient-to-r from-success via-primary to-error text-transparent bg-clip-text animate-gradient bg-300%">your bookshelf</h1>
                {/* <button className="mt-12 bg-[#23BE0A] text-xl text-white font-semibold px-6 py-4 rounded-lg">View The List</button> */}
                <div className="mt-12">
                    <a href="#_" className="text-white relative inline-flex items-center justify-start px-6 py-4 overflow-hidden font-medium transition-all bg-[#23BE0A] rounded-md group">
                        <span className="w-48 h-48 rounded-md rotate-[-40deg] bg-info absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative text-lg w-full transition-colors ease-in-out">View The List</span>
                    </a>
                </div>
            </div>
            <div className="">
                <img src={bookBanner} alt="" />
            </div>
        </div>
    );
};

export default Banner;