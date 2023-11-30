import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const handleBookmark = (meal) => {
    // Retrieve existing bookmarks from localStorage
    const existingBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    // Check if the meal is already bookmarked
    const isBookmarked = existingBookmarks.some((bookmark) => bookmark._id === meal?._id);

    // If not already bookmarked, add it to bookmarks
    if (!isBookmarked) {
        const updatedBookmarks = [...existingBookmarks, meal];
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
        toast.success('Meal add to favorite successfully!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
        });
    } else {
        toast.error('Meal is already added to favorite!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
        });
    }
};

export const handleCart = (meal) => {
    const existingcarts = JSON.parse(localStorage.getItem('cart')) || [];
    const iscarted = existingcarts.some((cart) => cart._id === meal?._id);

    if (!iscarted) {
        const updatedcarts = [...existingcarts, meal];
        localStorage.setItem('cart', JSON.stringify(updatedcarts));
        toast.success('Meal add to card successfully!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
        });
    } else {
        toast.error('Meal is already added to cart!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
        });
    }
};