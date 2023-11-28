import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Bookmark = () => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        // Retrieve bookmarks from localStorage
        const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        setBookmarks(storedBookmarks);
    }, []);

    return (
        // <div className='mt-16'>
        //     <h1>Bookmarked Meals</h1>
        //     <div>
        //         {bookmarks.length === 0 ? (
        //             <p>No bookmarked meals yet.</p>
        //         ) : (
        //             <ul>
        //                 {bookmarks.map((meal) => (
        //                     <li key={meal._id}>
        //                         {/* Display meal information as needed */}
        //                         <h3>{meal.title}</h3>
        //                         <p>{meal.description}</p>
        //                         {/* Add more details as needed */}
        //                     </li>
        //                 ))}
        //             </ul>
        //         )}
        //     </div>
        // </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold mb-6">Bookmarked Meals</h1>
            <div className="">
                {bookmarks.length === 0 ? (
                    <p>No bookmarked meals yet.</p>
                ) : (
                    bookmarks.map((meal) => (
                        <div
                            key={meal._id}
                            className="border border-gray-200 rounded-lg overflow-hidden shadow-md mt-5"
                        >
                            <div className="sm:flex items-center">
                                <div className="w-full sm:w-1/5">
                                    <img
                                        className="w-full h-auto"
                                        src={meal.recipeImage}
                                        alt={meal.title}
                                    />
                                </div>
                                <div className="w-2/3 px-4 py-2">
                                    <h2 className="text-xl font-semibold mb-2">{meal.title}</h2>
                                    <div className="flex items-center gap-4 mt-4">
                                        <Link to={`/feature/${meal._id}`} className='xl:w-1/12 lg:w-1/12 md:w-2/12 sm:3/12 w-2/12'><img className='rounded-full' src={meal?.authorImage} alt="" /></Link>
                                        <div className=" flex-grow">
                                            <p className='authorInfo-respo'>{meal?.authorName}</p>
                                            <p className='authorInfo-respo'>{meal?.uploadDate}</p>
                                        </div>
                                    </div>
                                    {/* Add more details as needed */}
                                </div>
                                    <Link><button className='btn btn-primary w-full'>Add To Card</button></Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Bookmark;
