import React from 'react';
import { FaRegCreditCard, FaClockRotateLeft, FaRegThumbsUp, FaRegBookmark } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useSetTitle from '../../CustomHooks/useSetTitle';
import ScrollToTop from '../../SHARED/ScrollToTop/ScrollToTop';
import { handleBookmark, handleCart } from '../BookmarkUtils/BookmarkUtils';

const CategoryMeals = () => {
    useSetTitle("Category")
    const categoryMeal = useLoaderData()
    // console.log(categoryMeal)
    if (!Array.isArray(categoryMeal)) return <p className='mt-20 font-bold text-2xl text-red-600'>Check Your Internet Connection or Reload again</p>
    else {
        return (
            <>
                <ScrollToTop />
                <ToastContainer />
                <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-10 my-20'>
                    {categoryMeal && categoryMeal.map((meal) => {
                        return (
                            <div key={meal?._id} className="p-2">
                                <Link to={`/single_category_meal/${meal?._id}`}><img className='' src={meal?.recipeImage} alt="" /></Link>
                                <div className="p-2">
                                    <div className="flex items-center justify-start gap-5">
                                        <span className='flex items-center text-xs '><FaClockRotateLeft />{meal?.duration}</span>
                                        <span className='flex items-center text-xs'><FaRegThumbsUp />{meal?.makingType}</span>
                                    </div>

                                    <Link to={`/single_category_meal/${meal?._id}`}><h1 className='text-2xl lg:text-md mt-2'>{meal?.title}</h1></Link>

                                    <div className='mt-3'>
                                        <p className=' text-sm'>
                                            {meal?.description.length < 150 ? <>{meal?.description}</> : <>{meal?.description.slice(0, 150)}...<Link className='text-blue-600 font-bold underline' to={`/single_category_meal/${meal?._id}`}>read more</Link></>}
                                        </p>
                                        <p className=' text-violet-700 font-bold text-lg sm:text-md py-2'>Price: ${meal?.price}</p>
                                        <div className="flex items-center gap-4 mt-2 pr-5">
                                            <Link to={`/single_category_meal/${meal?._id}`} className='w-2/12'><img className='rounded-full' src={meal?.authorImage} alt="" /></Link>
                                            <div className=" flex-grow">
                                                <p className='authorInfo-respo'>{meal?.authorName}</p>
                                                <p className='authorInfo-respo'>{meal?.uploadDate}</p>
                                            </div>
                                            <button onClick={() => handleCart(meal)} className='text-2xl relative focus:border-none focus:outline-none'>
                                                <FaRegCreditCard className='hover:text-red-500' />
                                                <span className='absolute -top-2 -left-16 opacity-0 text-sm bg-primary text-primary-content p-1 rounded-md z-10 hover:opacity-100'>Add to Cart</span>
                                            </button>
                                            <button
                                                className='text-2xl focus:border-none focus:outline-none'
                                                onClick={() => handleBookmark(meal)}
                                            >
                                                <FaRegBookmark className='hover:text-blue-700' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
};

export default CategoryMeals;