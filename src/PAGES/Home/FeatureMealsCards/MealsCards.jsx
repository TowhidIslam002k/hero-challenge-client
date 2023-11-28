import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MealsCards.css'
import { FaClockRotateLeft, FaRegThumbsUp, FaRegBookmark, FaRegCreditCard } from "react-icons/fa6";

const MealsCards = () => {
    const [feature, setFeature] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/feature')
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])

    // Add book marked item to localStorage
    const handleBookmark = (meal) => {
        // Retrieve existing bookmarks from localStorage
        const existingBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

        // Check if the meal is already bookmarked
        const isBookmarked = existingBookmarks.some((bookmark) => bookmark._id === meal._id);

        // If not already bookmarked, add it to bookmarks
        if (!isBookmarked) {
            const updatedBookmarks = [...existingBookmarks, meal];
            localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
            alert('Meal bookmarked successfully!');
        } else {
            alert('Meal is already bookmarked!');
        }
    };
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
            {feature && feature.slice(1, 7).map((meal) => {
                return (
                    <div key={meal?._id} className="p-2">
                        <Link to={`/feature/${meal._id}`}><img className='' src={meal?.recipeImage} alt="" /></Link>
                        <div className="p-2">
                            <div className="flex items-center justify-start gap-5">
                                <span className='flex items-center text-xs '><FaClockRotateLeft />{meal?.duration}</span>
                                <span className='flex items-center text-xs'><FaRegThumbsUp />{meal?.makingType}</span>
                            </div>

                            <Link to={`/feature/${meal._id}`}><h1 className='text-2xl lg:text-md mt-2'>{meal?.title}</h1></Link>

                            <div className='mt-3'>
                                <p className=' text-sm'>
                                    {meal?.description.length < 150 ? <>{meal?.description}</> : <>{meal?.description.slice(0, 150)}...<Link className='text-blue-600 font-bold underline' to={`/feature/${meal._id}`}>read more</Link></>}
                                </p>
                                <div className="flex items-center gap-4 mt-4 pr-5">
                                    <Link to={`/feature/${meal._id}`} className='w-2/12'><img className='rounded-full' src={meal?.authorImage} alt="" /></Link>
                                    <div className=" flex-grow">
                                        <p className='authorInfo-respo'>{meal?.authorName}</p>
                                        <p className='authorInfo-respo'>{meal?.uploadDate}</p>
                                    </div>
                                    <button className='text-2xl relative'>
                                        <FaRegCreditCard  className='hover:text-red-500'/>
                                        <span className='absolute -top-2 -left-16 opacity-0 text-sm bg-primary text-primary-content p-1 rounded-md z-10 hover:opacity-100'>Add to Cart</span>
                                    </button>
                                    <button
                                        className='text-2xl'
                                        onClick={() => handleBookmark(meal)}
                                    >
                                        <FaRegBookmark  className='hover:text-blue-700' />
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

export default MealsCards;