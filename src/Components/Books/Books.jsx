import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [dataLength, setDataLength] = useState(6);
    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    const handleDataLength = () => {
        setDataLength(books.length);
    }
    return (
        <div className="my-10">
            <h3 className="text-3xl text-center font-semibold font-prata">Books</h3>
            <p className="text-center text-xl font-medium mt-2">Here are some books that you might like!</p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    books?.slice(0, dataLength).map(book => <BookCard key={book.bookId} book={book} ></BookCard>)
                }
            </div>
            <div className={`${dataLength === books.length && 'hidden'} flex justify-center items-center mt-10 cursor-pointer`}>
                <a onClick={handleDataLength} className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-green-500 rounded-md group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#23BE0A] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-green-100"></span>
                    <span className="relative">Show More</span>
                </a>
            </div>
        </div>
    );
};
export default Books;