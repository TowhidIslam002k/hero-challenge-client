import Slider from 'react-slick';
// Import Slick Carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaClockRotateLeft, FaRegThumbsUp, FaRegBookmark, FaRegCreditCard } from "react-icons/fa6";
import './TopCarousel.css'
import { handleBookmark, handleCart } from '../../BookmarkUtils/BookmarkUtils';
import { ToastContainer } from 'react-toastify';

const TopCarousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        mobileFirst: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },

        ]
    };

    const [allMeals, setAllMeals] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/meals')
            .then(res => res.json())
            .then(data => setAllMeals(data))
    }, [])

    return (
        <>
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
            <div className='mt-24 mb-5'>
                <Slider {...settings}>
                    {allMeals && allMeals.slice(0, 6).map((meal) => {
                        return (
                            <div key={meal?._id} className="p-2 bg-base-200 relative">
                                <Link to={`/carousel/${meal._id}`}><img src={meal?.recipeImage} alt="" /></Link>
                                <div className="custom-w p-2 absolute bottom-5 left-10 sm:left-4 w-10/12 sm:w-11/12 h-1/4 hover:h-3/4 sm:hover:h-4/5 lg:hover:h-4/5 transform transition-all bg-white rounded-md overflow-hidden">
                                    <div className="flex items-center justify-start gap-5">
                                        <span className='flex items-center text-xs '><FaClockRotateLeft />{meal?.duration}</span>
                                        <span className='flex items-center text-xs'><FaRegThumbsUp />{meal?.makingType}</span>
                                    </div>

                                    <Link to={`/carousel/${meal._id}`}><h1 className='set-text text-1xl sm:font-bold lg:font-normal sm:text-md md:text-2xl md:my-6 lg:text-2xl my-4'>{meal?.title}</h1></Link>

                                    <div className='mt-5'>
                                        <p className='custom-hide-description text-sm'>
                                            {meal?.description.length < 150 ? <>{meal?.description}</> : <>{meal?.description.slice(0, 150)}...<Link className='text-blue-600 font-bold underline' to={`/carousel/${meal._id}`}>read more</Link></>}
                                        </p>
                                        <p className=' text-violet-700 font-bold sm:text-sm'>Price: ${meal.price}</p>
                                        <div className="flex items-center gap-4 mt-4 sm:mt-0 md:mt-3 pr-5">
                                            <Link to={`/carousel/${meal._id}`} className='w-2/12'><img className='rounded-full' src={meal?.authorImage} alt="" /></Link>
                                            <div className=" flex-grow">
                                                <p>{meal?.authorName}</p>
                                                <p>{meal?.uploadDate}</p>
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
                </Slider>
            </div>
        </>
    );
};

export default TopCarousel;
