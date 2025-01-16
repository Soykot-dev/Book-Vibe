import { Link } from 'react-router-dom';
import bookBanner from '../../assets/book-banner.png'
const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row md:gap-10 justify-center md:items-center bg-base-200 rounded-lg md:rounded-3xl px-8 md:px-0 py-8 md:py-16'>
            <div className="">
                <h1 className="text-3xl md:text-6xl font-prata font-black bg-gradient-to-r from-success via-primary to-error text-transparent bg-clip-text animate-gradient bg-300%">Books to freshen up</h1>
                <h1 className="mt-3 md:mt-8 pl-1 pb-2 text-3xl md:text-6xl font-prata font-black bg-gradient-to-r from-success via-primary to-error text-transparent bg-clip-text animate-gradient bg-300%">your bookshelf</h1>
                <div className="mt-4 md:mt-12">
                    <Link to="/listed-book" className="text-white relative inline-flex items-center justify-start px-3 md:px-6 py-2 pt-3 md:pt-4 md:py-4 overflow-hidden font-medium transition-all bg-[#23BE0A] rounded-md group">
                        <span className="w-48 h-48 rounded-md rotate-[-40deg] bg-info absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative text-xs md:text-lg w-full transition-colors ease-in-out">View The List</span>
                    </Link>
                </div>
            </div>
            <div className="mt-5 flex justify-center md:mt-0">
                <img className="w-56 md:w-full" src={bookBanner} alt="" />
            </div>
        </div>
    );
};

export default Banner;