import toast from "react-hot-toast";

const getReadBooks = () => {
  let readBook = [];
  const storedReadBook = localStorage.getItem("read-books");
  if (storedReadBook) {
    readBook = JSON.parse(storedReadBook);
  }
  return readBook;
};

const getWishlistBooks = () => {
  let wishlistBooks = [];
  const storedWishlistBooks = localStorage.getItem("wishlist-books");
  if (storedWishlistBooks) {
    wishlistBooks = JSON.parse(storedWishlistBooks);
  }
  return wishlistBooks;
};

const saveReadBooks = (bookId) => {
  let readBooks = getReadBooks();
  const isExist = readBooks.find((id) => id === bookId);
  if (isExist) {
    removeWishlistBooks(bookId);
    return toast.error("You have already add this book!");
  } else {
    readBooks.push(bookId);
    removeWishlistBooks(bookId);
    localStorage.setItem("read-books", JSON.stringify(readBooks));
    return toast.success("Book successfully added in read books!");
  }
};

const saveWishlistBooks = (bookId) => {
  const readBooks = getReadBooks();
  let wishlistBooks = getWishlistBooks();
  const isExistReadBooks = readBooks.find((id) => id === bookId);
  const isExist = wishlistBooks.find((id) => id === bookId);
  if (isExist || isExistReadBooks) {
    return toast.error("You have already add this book!");
  } else {
    wishlistBooks.push(bookId);
    localStorage.setItem("wishlist-books", JSON.stringify(wishlistBooks));
    return toast.success("Book successfully added in wishlist books!")
  }
};

const removeWishlistBooks = (bookId) => {
  let wishListBooks = getWishlistBooks();
  const remaining = wishListBooks.filter((id) => id !== bookId);
  localStorage.setItem("wishlist-books", JSON.stringify(remaining));
};

export { getReadBooks, saveReadBooks, getWishlistBooks, saveWishlistBooks };
