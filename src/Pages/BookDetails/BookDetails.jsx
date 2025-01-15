import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const book = books?.find(book => book.bookId === parseInt(id));
    const { bookName, image, review, tags, rating, author, totalPages, publisher, yearOfPublishing } = book;
    return (
        <div className="flex flex-col md:flex-row justify-center md:gap-10 mx-3 md:mx-32 mb-16 border p-3 md:p-5 rounded-md">
            <div className="flex justify-center items-center md:w-1/2 bg-base-200 py-9 md:py-16 rounded-md md:rounded-2xl">
                <img className="w-36 md:w-72" src={image} alt="" />
            </div>
            <div className="md:w-1/2 flex flex-col">
                <h3 className="mt-2 md:mt-0 text-2xl md:text-3xl font-black font-prata">{bookName}</h3>
                <p className="md:text-lg font-semibold mt-2">By: <span className="font-light">{author}</span></p>
                <hr className="mt-3 mb-2" />
                <p className="md:text-lg font-semibold">Fiction</p>
                <hr className="mt-3 mb-2" />
                <p className="md:text-lg text-justify font-semibold">Review: <span className="text-base font-light">{review}</span></p>
                <div className="mt-3">
                    <span className="md:text-lg font-semibold mr-1 md:mr-2">Tag:</span>
                    {
                        tags?.map(tag => <span key={tag} className="text-xs md:text-sm bg-base-200 text-[#23BE0A] px-2  md:px-4 pt-1 pb-[6px] rounded-full mr-2 md:mr-3">#{tag}</span>)
                    }
                </div>
                <hr className="mt-5 mb-2" />
                <div className="flex flex-grow md:gap-0 text-sm md:text-base">
                    <div className="w-2/3 md:w-2/4 space-y-2 flex flex-col">
                        <span className="font-thin">Number of pages:</span>
                        <span className="font-thin">Publisher:</span>
                        <span className="font-thin">Year of publishing:</span>
                        <span className="font-thin">Rating:</span>
                    </div>
                    <div className="w-full space-y-2 flex flex-col">
                        <span className="font-semibold">{totalPages}</span>
                        <span className="font-semibold">{publisher}</span>
                        <span className="font-semibold">{yearOfPublishing}</span>
                        <span className="font-semibold">{rating}</span>
                    </div>
                </div>
                <div className="flex gap-4 mt-4">
                    <a className="relative inline-flex items-center justify-start px-10 py-3 overflow-hidden  transition-all bg-[#23BE0A] rounded-md group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#248f13] rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-300 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#48ec2f] rounded-md group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left font-semibold text-white transition-colors duration-200 ease-in-out group-hover:text-white">Read</span>
                    </a>


                    <a className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#59C6D2] group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Wishlist</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;