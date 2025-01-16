import PropTypes from "prop-types";
import locationIcon from '../../assets/location.png'
import peopleIcon from '../../assets/people.png'
import fileIcon from '../../assets/file.png'
import { Link } from "react-router-dom";
const ListedBooksCard = ({ book }) => {
    const { bookId, bookName, image, tags, author, totalPages, publisher, yearOfPublishing, category, rating } = book;
    return (
        <div className="flex flex-col md:flex-row gap-5 border hover:border-success duration-200 rounded-lg p-3 md:p-5 mb-5">
            <div className="flex justify-center items-center rounded-lg bg-base-200 py-5 px-10">
                <img className="w-28 h-36" src={image} alt="" />
            </div>
            <div className="md:space-y-2 flex-grow flex flex-col">
                <h4 className="text-xl font-extrabold font-prata">{bookName}</h4>
                <span>By: {author}</span>
                <div className="flex flex-col gap-1 items-start md:flex-row">
                    <div className="">
                        <span className="font-semibold text-xs md:text-base mr-2 md:mr-3">Tag</span>
                        {
                            tags?.map(tag => <span key={tag} className="text-xs md:text-sm bg-base-200 text-[#23BE0A] px-2  md:px-3 pt-1 pb-[6px] rounded-full mr-1 md:mr-3">#{tag}</span>)
                        }
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <img className="w-5 h-4" src={locationIcon} alt="" />
                        <span>Year of Publishing: {yearOfPublishing}</span>
                    </div>
                </div>
                <div className="flex flex-col items-start md:flex-row md:gap-4 mt-1 md:mt-0">
                    <div className="flex gap-2 justify-center items-start md:items-center">
                        <img className="w-5 h-4 mt-1 md:mt-0" src={peopleIcon} alt="" />
                        <span>Publisher: {publisher}</span>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <img className="w-5 h-4" src={fileIcon} alt="" />
                        <span>Page: {totalPages}</span>
                    </div>
                </div>
                <hr className="flex-grow my-3 md:my-0" />
                <div className="flex gap-1 md:gap-3">
                    <div className="rounded-full text-xs md:text-base md:px-4 px-2 py-1 md:py-[5px] bg-[#328eff67]"><span className="text-[#328EFF]">Category: {category}</span></div>
                    <div className="rounded-full text-xs md:text-base md:px-4 px-2 py-1 md:py-[5px] bg-[#ffad337d]"><span className="text-[#FFAC33]">Rating: {rating}</span></div>
                    <div className="rounded-full text-xs md:text-base md:px-4 px-2 py-1 md:py-[5px] bg-[#23BE0A]"><Link to={`/book-details/${bookId}`}><button className="text-white">View Details</button></Link></div>
                </div>
            </div>
        </div>
    );
};

ListedBooksCard.propTypes = {
    book: PropTypes.object.isRequired
}

export default ListedBooksCard;