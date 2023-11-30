import { useState, useEffect } from 'react';
import ScrollToTop from '../../SHARED/ScrollToTop/ScrollToTop';
import { toast, ToastContainer } from 'react-toastify';
import BookmarkAndCart from '../BookmarkedCartedChild/BookmarkAndCart';

const CartedMeals = () => {
    const [cart, setcart] = useState([]);

    useEffect(() => {
        // Retrieve cart from localStorage
        const storedcart = JSON.parse(localStorage.getItem('cart')) || [];
        setcart(storedcart);
    }, []);

    const handleRemoveCart = (meal) => {
        const existingcart = JSON.parse(localStorage.getItem('cart')) || [];

        // Remove the item from cart
        const updatedcart = existingcart.filter((item) => item._id !== meal?._id);

        localStorage.setItem('cart', JSON.stringify(updatedcart));
        setcart(updatedcart);
        toast.error('Meal remove from cart!');
    };

    return (
        <>
            {/* <ScrollToTop /> */}
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-3xl font-semibold mb-6">Carted Meals</h1>
                <div className="">
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cart.map((meal) => (<BookmarkAndCart
                            key={meal?._id} meal={meal} handleRemoveBookmark={handleRemoveCart}
                        >Buy now</BookmarkAndCart>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default CartedMeals;
