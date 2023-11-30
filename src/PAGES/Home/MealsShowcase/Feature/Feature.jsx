import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClockRotateLeft, FaRegThumbsUp, FaRegBookmark, FaRegCreditCard } from "react-icons/fa6";
import { handleBookmark, handleCart } from '../../../BookmarkUtils/BookmarkUtils';
import { ToastContainer } from 'react-toastify';

const Feature = () => {

    const [feature, setFeature] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/feature')
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])

    return (
        <div>
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
            <div className="flex w-full items-center gap-5 mb-10">
                <h1 className='text-xl font-bold'>Feature</h1>
                <div className="cus-border mt-2"></div>
            </div>
            {feature && feature.slice(0, 1).map((meal) => {
                return (
                    <div key={meal?._id} className="p-2">
                        <Link to={`/feature/${meal?._id}`}><img className='' src={meal?.recipeImage} alt="" /></Link>
                        <div className="p-2">
                            <div className="flex items-center justify-start gap-5">
                                <span className='flex items-center text-xs '><FaClockRotateLeft />{meal?.duration}</span>
                                <span className='flex items-center text-xs'><FaRegThumbsUp />{meal?.makingType}</span>
                            </div>

                            <Link to={`/feature/${meal?._id}`}><h1 className='text-2xl lg:text-md mt-2'>{meal?.title}</h1></Link>

                            <div className='mt-3'>
                                <p className=' text-sm'>
                                    {meal?.description.length < 150 ? <>{meal?.description}</> : <>{meal?.description.slice(0, 150)}...<Link className='text-blue-600 font-bold underline' to={`/feature/${meal?._id}`}>read more</Link></>}
                                </p>
                                <p className=' text-violet-700 font-bold text-lg sm:text-sm'>Price: ${meal?.price}</p>
                                <div className="flex items-center gap-4 mt-4 pr-5">
                                    <Link to={`/feature/${meal?._id}`} className='w-2/12'><img className='rounded-full' src={meal?.authorImage} alt="" /></Link>
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
    );
};

export default Feature;