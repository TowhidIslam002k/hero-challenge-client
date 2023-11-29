import { useState, useEffect } from 'react';
import ScrollToTop from '../../SHARED/ScrollToTop/ScrollToTop';
import { toast, ToastContainer } from 'react-toastify';
import BookmarkAndCart from '../BookmarkedCartedChild/BookmarkAndCart';

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
        const updatedBookmarks = existingBookmarks.filter((bookmark) => bookmark._id !== meal._id);

        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
        setBookmarks(updatedBookmarks);
        toast.error('Meal remove from bookmarked!');
    };

    return (
        <>
            <ScrollToTop />
            <ToastContainer
                position="top-center"
                autoClose={3000}
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
                <h1 className="text-3xl font-semibold mb-6">Bookmarked Meals</h1>
                <div className="">
                    {bookmarks.length === 0 ? (
                        <p>No bookmarked meals yet.</p>
                    ) : (
                        bookmarks.map((meal) => (<BookmarkAndCart
                            key={meal._id} meal={meal} handleRemoveBookmark={handleRemoveBookmark}
                        >Add To Card</BookmarkAndCart>
                            // <div
                            //     key={meal._id}
                            //     className="border border-gray-200 rounded-lg overflow-hidden shadow-md mt-5"
                            // >
                            //     <div className="sm:flex items-center">
                            //         <div className="w-full sm:w-1/5">
                            //             <img
                            //                 className="w-full h-auto"
                            //                 src={meal.recipeImage}
                            //                 alt={meal.title}
                            //             />
                            //         </div>
                            //         <div className="w-2/3 px-4 py-2">
                            //             <h2 className="text-xl font-semibold mb-2">{meal.title}</h2>

                            //             {/* add price */}
                            //             <div className="sm:flex gap-5 items-center justify-start">
                            //                 <div className="flex items-center gap-4 mt-4">
                            //                     <Link to={`/feature/${meal._id}`} className='custom-price-width-set xl:w-3/12 lg:w-2/12 md:w-3/12 sm:w-3/12 w-2/12'><img className='rounded-full' src={meal?.authorImage} alt="" /></Link>
                            //                     <div className=" flex-grow">
                            //                         <p className='authorInfo-respo'>{meal?.authorName}</p>
                            //                         <p className='authorInfo-respo'>{meal?.uploadDate}</p>
                            //                     </div>
                            //                 </div>
                            //                 <p className=' text-violet-700 font-bold mt-5 sm:mt-0 text-lg sm:text-md sm:pl-2 sm:py-2 py-2 shadow-lg md:shadow-none lg:shadow-lg lg:px-4'>Price: ${meal.price}</p>
                            //             </div>
                            //             {/* Add more details as needed */}
                            //         </div>
                            //         <div className="">
                            //             <Link><button className='btn btn-primary w-full sm:w-2/3 mb-2 mx-auto'>Add To Card</button></Link>
                            //             <Link><button onClick={() => handleRemoveBookmark(meal)} className='mb-2 btn btn-primary w-full sm:w-2/3'>Remove</button></Link>
                            //         </div>
                            //     </div>
                            // </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Bookmark;
