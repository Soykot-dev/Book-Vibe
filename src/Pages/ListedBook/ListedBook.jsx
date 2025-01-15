import { Link } from 'react-router-dom';
import dropdownPng from '../../assets/dropdown.png'
import { useState } from 'react';
const ListedBook = () => {
    const [tabIdx, setTabIdx] = useState(0);
    const handleTabIdx = (idx) => {
        setTabIdx(idx);
    }
    return (
        <div className="mx-16 my-5 font-lato">
            <div className="bg-base-300 py-8 rounded-2xl">
                <h2 className="text-3xl font-extrabold text-center">Books</h2>
            </div>
            <div className="flex justify-center my-7">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="flex items-center justify-center gap-2 bg-[#23BE0A] text-white px-6 py-3 rounded-md font-semibold m-1"><span>Sort By</span> <img className='w-4 h-3 mt-1' src={dropdownPng} alt="" /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-left flex-nowrap">
                <Link onClick={() => handleTabIdx(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIdx === 0 ? 'border border-b-0 rounded-t-lg font-semibold' : 'border-b'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link onClick={() => handleTabIdx(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIdx === 1 ? 'border border-b-0 rounded-t-lg font-semibold' : 'border-b'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
        </div>
    );
};

export default ListedBook;