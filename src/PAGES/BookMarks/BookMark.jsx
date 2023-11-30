import { useState, useEffect } from 'react';
import ScrollToTop from '../../SHARED/ScrollToTop/ScrollToTop';
import { toast, ToastContainer } from 'react-toastify';
import BookmarkAndCart from '../BookmarkedCartedChild/BookmarkAndCart';
import { handleCart } from '../BookmarkUtils/BookmarkUtils';

const Bookmark = () => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        // Retrieve bookmarks from localStorage
        const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        setBookmarks(storedBookmarks);
    }, []);

    const handleRemoveBookmark = (meal) => {
        const existingBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

        // Remove the item from bookmarks
        const updatedBookmarks = existingBookmarks.filter((bookmark) => bookmark._id !== meal?._id);

        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
        setBookmarks(updatedBookmarks);
        toast.error('Meal remove from bookmarked!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
        });
    };

    return (
        <>
            <ScrollToTop />
            <ToastContainer />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-3xl font-semibold mb-6">Bookmarked Meals</h1>
                <div className="">
                    {bookmarks.length === 0 ? (
                        <p>No bookmarked meals yet.</p>
                    ) : (
                        bookmarks.map((meal) => (<BookmarkAndCart
                            key={meal?._id} meal={meal} handleRemoveBookmark={handleRemoveBookmark}
                        ><span onClick={() => handleCart(meal)}>Add To Card</span></BookmarkAndCart>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Bookmark;
