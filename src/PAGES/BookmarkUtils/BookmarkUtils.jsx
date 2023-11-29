import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const handleBookmark = (meal) => {
    const existingBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const isBookmarked = existingBookmarks.some((bookmark) => bookmark._id === meal._id);

    if (!isBookmarked) {
        const updatedBookmarks = [...existingBookmarks, meal];
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
        // alert('Meal bookmarked successfully!');
        toast.success('Meal bookmarked successfully!',);
    } else {
        // Remove the item from bookmarks
        const updatedBookmarks = existingBookmarks.filter((bookmark) => bookmark._id !== meal._id);
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
        // alert('Meal removed from bookmarks!');
        toast.error('Meal remove from bookmarked!',);
    }
};

export const handleCart = (meal) => {
    const existingcarts = JSON.parse(localStorage.getItem('cart')) || [];
    const iscarted = existingcarts.some((cart) => cart._id === meal._id);

    if (!iscarted) {
        const updatedcarts = [...existingcarts, meal];
        localStorage.setItem('cart', JSON.stringify(updatedcarts));
        // alert('Meal carted successfully!');
        toast.success('Meal add to card successfully!',);
    } else {
        // Remove the item from carts
        const updatedcarts = existingcarts.filter((cart) => cart._id !== meal._id);
        localStorage.setItem('cart', JSON.stringify(updatedcarts));
        // alert('Meal removed from carts!');
        toast.error('Meal remove from cart!',);
    }
};