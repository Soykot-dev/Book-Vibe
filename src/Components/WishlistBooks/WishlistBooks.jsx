import PropTypes from "prop-types";
import ListedBooksCard from "../ListedBooksCard/ListedBooksCard";

const WishlistBooks = ({ displayBooks }) => {
    return (
        <div className="md:my-5">
            {
                displayBooks?.map(book => <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)
            }
        </div>
    );
};

WishlistBooks.propTypes = {
    displayBooks: PropTypes.array.isRequired
}

export default WishlistBooks;