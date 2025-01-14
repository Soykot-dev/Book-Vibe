import { useEffect, useState } from "react";

const Books = () => {
    const [books, setBooks] = useState([]);
    console.log(books)
    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h4>Books : {books.length}</h4>
        </div>
    );
};

export default Books;