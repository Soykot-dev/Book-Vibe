import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    console.log(books)
    return (
        <div>
            book details
        </div>
    );
};

export default BookDetails;