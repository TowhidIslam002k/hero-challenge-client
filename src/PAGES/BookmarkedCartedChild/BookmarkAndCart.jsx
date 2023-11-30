import React from 'react';
import { Link } from 'react-router-dom';

// this component is used as a child compo in bookmark and cart component..
const BookmarkAndCart = ({ meal, handleRemoveBookmark, children }) => {

    return (
        <div
            key={meal?._id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-md mt-5"
        >
            <div className="md:flex items-center">
                <div className="w-full md:w-1/5">
                    <img
                        className="w-full h-auto"
                        src={meal?.recipeImage}
                        alt={meal?.title}
                    />
                </div>
                <div className="md:w-2/3 px-4 py-2">
                    <h2 className="text-xl font-semibold mb-2">{meal?.title}</h2>

                    {/* add price */}
                    <div className="sm:flex gap-5 items-center justify-start">
                        <div className="flex items-center gap-4 mt-4">
                            <Link to={`/feature/${meal?._id}`} className='custom-price-width-set xl:w-3/12 lg:w-2/12 md:w-3/12 sm:w-3/12 w-2/12'><img className='rounded-full' src={meal?.authorImage} alt="" /></Link>
                            <div className=" flex-grow">
                                <p className='authorInfo-respo'>{meal?.authorName}</p>
                                <p className='authorInfo-respo'>{meal?.uploadDate}</p>
                            </div>
                        </div>
                        <p className=' text-violet-700 font-bold mt-5 sm:mt-0 text-lg sm:text-md sm:pl-2 sm:py-2 py-2 shadow-lg md:shadow-none lg:shadow-lg lg:px-4'>Price: ${meal?.price}</p>
                    </div>
                    {/* Add more details as needed */}
                </div>
                <div className="">
                    <Link><button className='btn btn-primary w-full md:w-2/3 mb-2 mx-auto'>{children}</button></Link>
                    <Link><button onClick={() => handleRemoveBookmark(meal)} className='mb-2 btn btn-primary w-full md:w-2/3'>Remove</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BookmarkAndCart;