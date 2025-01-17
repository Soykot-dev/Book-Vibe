import { useEffect, useState } from "react";
import { getReadBooks } from "../../Utilities/localStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import PropTypes from "prop-types";
import NoBooks from "../../Components/NoBooks/NoBooks";

const PagesToRead = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        const scaledWidth = width * 1.2; // Adjust the scale factor (e.g., 0.5 for half the width)
        const offset = (width - scaledWidth) / 2; // Center the triangle
        return `M${x + offset},${y + height}
                C${x + offset + scaledWidth / 3},${y + height} ${x + offset + scaledWidth / 2},${y + height / 3}
                ${x + offset + scaledWidth / 2},${y}
                C${x + offset + scaledWidth / 2},${y + height / 3} ${x + offset + (2 * scaledWidth) / 3},${y + height}
                ${x + offset + scaledWidth},${y + height}
                Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props; /// fix propTypes validation for this line. I am getting propTypes error here

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const [books, setBooks] = useState([]);
    console.log(books.length);
    useEffect(() => {
        const readBooks = getReadBooks();
        fetch('book.json')
            .then(res => res.json())
            .then(data => {
                const filterBooks = data?.filter(book =>
                    readBooks?.includes(book.bookId.toString())
                );
                setBooks(filterBooks);
            });
    }, []);
    return (
        <div className="mx-3 md:mx-16">
            {
                books.length == 0 ? <NoBooks></NoBooks> : <div className="flex justify-center overflow-auto">
                    <BarChart
                        width={800}
                        height={500}
                        data={books}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="bookName" />
                        <YAxis />
                        <Tooltip></Tooltip>
                        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {books.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
            }
        </div>
    );
};

PagesToRead.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
};

export default PagesToRead;