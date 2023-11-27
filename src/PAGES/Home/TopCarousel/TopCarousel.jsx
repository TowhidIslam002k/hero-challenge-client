import Slider from 'react-slick';
// Import Slick Carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaClockRotateLeft, FaRegThumbsUp, FaRegBookmark } from "react-icons/fa6";
import './TopCarousel.css'

const TopCarousel = () => {
    const settings = {
        // dots: true,
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
                    // dots: true
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
        <div className='mt-24 mb-5'>
            <Slider {...settings}>
                {allMeals && allMeals.slice(0, 6).map((meal) => {
                    return (
                        <div key={meal?._id} className="p-2 bg-base-200 relative">
                            <Link><img src={meal?.recipeImage} alt="" /></Link>
                            <div className="custom-w p-2 absolute bottom-5 left-10 sm:left-4 w-10/12 sm:w-11/12 h-1/4 hover:h-3/4 sm:hover:h-4/5 lg:hover:h-4/5 transform transition-all bg-white rounded-md overflow-hidden">
                                <div className="flex items-center justify-start gap-5">
                                    <span className='flex items-center text-xs '><FaClockRotateLeft />{meal?.duration}</span>
                                    <span className='flex items-center text-xs'><FaRegThumbsUp />{meal?.makingType}</span>
                                </div>

                                <Link><h1 className='set-text text-1xl sm:text-md md:text-2xl md:my-6 lg:text-2xl my-4'>{meal?.title}</h1></Link>

                                <div className='mt-5'>
                                    <p className=' text-sm'>
                                        {meal?.description.length < 150 ? <>{meal?.description}</> : <>{meal?.description.slice(0, 150)}...<Link>read more</Link></>}
                                    </p>
                                    <div className="flex items-center gap-4 mt-4 pr-5">
                                        <Link className='w-2/12'><img className='rounded-full' src={meal?.authorImage} alt="" /></Link>
                                        <div className=" flex-grow">
                                            <p>{meal?.authorName}</p>
                                            <p>{meal?.uploadDate}</p>
                                        </div>
                                        <button className='text-2xl'><FaRegBookmark /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default TopCarousel;
