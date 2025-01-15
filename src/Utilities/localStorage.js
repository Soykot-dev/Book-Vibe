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
    return alert("Errorrrrrrrrrr!");
  } else {
    readBooks.push(bookId);
    removeWishlistBooks(bookId);
    localStorage.setItem("read-books", JSON.stringify(readBooks));
    return alert("Save!!!!!!");
  }
};

const saveWishlistBooks = (bookId) => {
  const readBooks = getReadBooks();
  let wishlistBooks = getWishlistBooks();
  const isExistReadBooks = readBooks.find((id) => id === bookId);
  const isExist = wishlistBooks.find((id) => id === bookId);
  if (isExist || isExistReadBooks) {
    return alert("Erorrrrrr");
  } else {
    wishlistBooks.push(bookId);
    localStorage.setItem("wishlist-books", JSON.stringify(wishlistBooks));
    alert("Successssss");
  }
};

const removeWishlistBooks = (bookId) => {
  let wishListBooks = getWishlistBooks();
  const remaining = wishListBooks.filter((id) => id !== bookId);
  localStorage.setItem("wishlist-books", JSON.stringify(remaining));
};

export { getReadBooks, saveReadBooks, getWishlistBooks, saveWishlistBooks };
