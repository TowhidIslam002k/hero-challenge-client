import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';


const IconCarousel = () => {
    const [foodIcons, setFoodIcons] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/cFoods')
        .then(res => res.json())
        .then(data => setFoodIcons(data))
    },[])

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            
        ]
    }
    return (
        <div className='my-20 border border-spacing-1 py-3'>
            <Slider {...settings}>
                {
                    foodIcons && foodIcons.map((fi) => {
                        return(
                            <div key={fi._id}>
                                <Link><img className='w-3/5 mx-auto' src={fi.img} alt="" /></Link>
                                <p className='text-center'>{fi.title}</p>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
};

export default IconCarousel;