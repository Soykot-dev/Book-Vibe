import PropTypes from 'prop-types';
import star from '../../assets/star.png'
import { Link } from 'react-router-dom';
const BookCard = ({ book }) => {
    const { bookId, bookName, image, tags, rating, author } = book;
    return (
        <Link to={`/book-details/${bookId}`} className="border p-5 rounded-lg font-lato hover:scale-105 group duration-150">
            <div className="flex justify-center items-center bg-base-200 rounded-lg py-6">
                <img className="w-32 h-44" src={image} alt="" />
            </div>
            <div className="my-4">
                {
                    tags?.map(tag => <span key={tag} className="text-xs bg-base-200 text-[#23BE0A] px-2 py-2 rounded-full mr-1">{tag}</span>)
                }
            </div>
            <h3 className="text-lg font-semibold font-prata mt-5 my-2 group-hover:underline">{bookName}</h3>
            <p>By: {author}</p>
            <hr className="border border-dashed my-3" />
            <div className="flex justify-between items-center">
                <span className="">Rating</span>
                <div className="flex items-center">
                    <img className="w-4 h-4" src={star} alt="" />
                    <span className="ml-1">{rating}</span>
                </div>
            </div>
        </Link>
    );
};

BookCard.propTypes = {
    book: PropTypes.object.isRequired
}

export default BookCard;