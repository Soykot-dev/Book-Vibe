import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className="my-10">
            <h3 className="text-3xl text-center font-semibold font-prata">Books</h3>
            <p className="text-center text-xl font-medium mt-2">Here are some books that you might like!</p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    books?.map(book => <BookCard key={book.bookId} book={book} ></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;