import PropTypes from "prop-types";
import ListedBooksCard from "../ListedBooksCard/ListedBooksCard";
import NoBooks from "../NoBooks/NoBooks";

const WishlistBooks = ({ displayBooks }) => {
    return (
        <div className="md:my-5">
            {
                displayBooks.length == 0 ? <NoBooks></NoBooks> : displayBooks?.map(book => <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)
            }
        </div>
    );
};

WishlistBooks.propTypes = {
    displayBooks: PropTypes.array.isRequired
}

export default WishlistBooks;