import dropdownPng from '../../assets/dropdown.png';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from '../../Components/ReadBooks/ReadBooks';
import WishlistBooks from '../../Components/WishlistBooks/WishlistBooks';
import { getReadBooks, getWishlistBooks } from '../../Utilities/localStorage';
import { useLoaderData } from 'react-router-dom';

const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [dropdownText, setDropdownText] = useState('Sort By');
    const [books, setBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);
    const allBooksData = useLoaderData();
    useEffect(() => {
        const readBooks = getReadBooks();
        const wishlistBooks = getWishlistBooks();
        if (tabIndex == 0) {
            const filterBooks = allBooksData?.filter(book => readBooks.includes(book.bookId.toString()));
            setBooks(filterBooks);
            setDisplayBooks(filterBooks);
        } else {
            const filterBooks = allBooksData?.filter(book => wishlistBooks.includes(book.bookId.toString()));
            setBooks(filterBooks);
            setDisplayBooks(filterBooks);
        }
        setDropdownText('Sort By');
    }, [tabIndex, allBooksData]);
    const handleSortBooks = (value) => {
        let sortedBooks = [...books];
        if (value === 'rating') {
            sortedBooks.sort((a, b) => b.rating - a.rating)
            setDropdownText('Rating');
        }
        else if (value === 'numberOfPages') {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages)
            setDropdownText('Number of Pages');
        }
        else if (value === 'publisherYear') {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
            setDropdownText('Publisher Year');
        }
        setDisplayBooks(sortedBooks);
    }
    return (
        <div className="mx-3 md:mx-16 md:my-5 font-lato">
            <div className="bg-base-300 py-8 rounded-2xl">
                <h2 className="text-3xl font-extrabold text-center">Books</h2>
            </div>
            <div className="flex justify-center my-3 md:my-7">
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="flex items-center justify-center gap-2 bg-[#23BE0A] text-white px-3 md:px-6 py-2
                         md:py-3 rounded-md font-semibold m-1"
                    >
                        <span>{dropdownText}</span>
                        <img className="w-4 h-3 mt-1" src={dropdownPng} alt="" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                        <li onClick={() => handleSortBooks('rating')}><a>Rating</a></li>
                        <li onClick={() => handleSortBooks('numberOfPages')}><a>Number of pages</a></li>
                        <li onClick={() => handleSortBooks('publisherYear')}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList >
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        <WishlistBooks displayBooks={displayBooks} ></WishlistBooks>
                    </TabPanel>
                    <TabPanel>
                        <ReadBooks displayBooks={displayBooks} ></ReadBooks>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBook;
