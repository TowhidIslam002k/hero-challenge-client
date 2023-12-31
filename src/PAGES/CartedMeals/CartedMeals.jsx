import { useState, useEffect } from 'react';
import ScrollToTop from '../../SHARED/ScrollToTop/ScrollToTop';
import { toast, ToastContainer } from 'react-toastify';
import BookmarkAndCart from '../BookmarkedCartedChild/BookmarkAndCart';
import { Link } from 'react-router-dom';
import useSetTitle from '../../CustomHooks/useSetTitle';
import GoToTopIcon from '../../SHARED/GoToTopIcon/GoToTopIcon';
import { FaCircleArrowUp } from 'react-icons/fa6';

const CartedMeals = () => {
    useSetTitle('Cart')
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
        toast.error('Meal remove from cart!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
        });
    };

    return (
        <>
            <ScrollToTop />
            <ToastContainer/>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-3xl font-semibold mb-6">Carted Meals</h1>
                <div className="">
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cart.map((meal) => (<BookmarkAndCart
                            key={meal?._id} meal={meal} handleRemoveBookmark={handleRemoveCart}
                        ><Link to='/buy'>Buy now</Link></BookmarkAndCart>
                        ))
                    )}
                </div>
            </div>

            {/* scroll to top icon */}
            <div className="fixed bottom-6 right-6">
                <span onClick={GoToTopIcon} className='text-3xl'><FaCircleArrowUp /></span>
            </div>
        </>
    );
};

export default CartedMeals;
