import { useContext } from 'react';
import { useState } from 'react';
import { FaCircleArrowUp, FaClockRotateLeft, FaRegBookmark, FaRegCreditCard, FaRegThumbsUp } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import { UserContext } from '../../ContextProviders/AuthProviders';
import useSetTitle from '../../CustomHooks/useSetTitle';
import GoToTopIcon from '../../SHARED/GoToTopIcon/GoToTopIcon';
import ScrollToTop from '../../SHARED/ScrollToTop/ScrollToTop';
import { handleBookmark, handleCart } from '../BookmarkUtils/BookmarkUtils';

const MyUpload = () => {
    useSetTitle('My Upload')
    const {user} = useContext(UserContext)
    const uploadData = useLoaderData();
    const [myUpload, setMyUpload] = useState(uploadData)
    
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this item?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hero-server3.vercel.app/deleteMeal/${id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Meal has been deleted.",
                                icon: "success"
                            })
                            // window.location.reload();
                            let newArr = myUpload.filter(item => item._id !== id);
                            setMyUpload(newArr)
                        }
                    });
            }
        });
    }
    if(user && !Array.isArray(myUpload)) return <p className='mt-20 font-bold text-2xl text-red-600'>Check Your Inter Connection or Relod Again</p>
    else if(user && uploadData.length === 0) return <p className='mt-20 font-bold text-2xl text-red-600'>You did not post any meal yet...</p>
    else {
        return<>
            <ScrollToTop />
            <ToastContainer />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                {myUpload && myUpload.map((meal) => {
                    return (
                        <div key={meal?._id} className="p-2">
                            <Link to={`/public/${meal?._id}`}><img className='md:h-72 lg:h-80 xl:h-96 object-cover' src={meal?.recipeImage} alt="" /></Link>
                            <div className="p-2">
                                <div className="flex items-center justify-start gap-5">
                                    <span className='flex items-center text-xs '><FaClockRotateLeft />{meal?.duration}</span>
                                    <span className='flex items-center text-xs'><FaRegThumbsUp />{meal?.makingType}</span>
                                </div>

                                <Link to={`/public/${meal?._id}`}><h1 className='text-2xl lg:text-md mt-2'>{meal?.title}</h1></Link>

                                <div className='mt-3'>
                                    <p className=' text-sm'>
                                        {meal?.description.length < 150 ? <>{meal?.description}</> : <>{meal?.description.slice(0, 150)}...<Link className='text-blue-600 font-bold underline' to={`/public/${meal?._id}`}>read more</Link></>}
                                    </p>
                                    <p className=' text-violet-700 font-bold text-lg sm:text-md py-2'>Price: ${meal?.price}</p>
                                    <div className="flex items-center gap-4 mt-2 pr-5">
                                        <Link to={`/public/${meal?._id}`} className='w-2/12'><img className='rounded-full' src={meal?.authorImage} alt="" /></Link>
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
                                <div className="flex items-center justify-between">
                                    <Link to={`/updateMeal/${meal?._id}`}><button className='mt-3 px-6 py-2 bg-secondary hover:bg-fuchsia-500 text-white rounded-sm'>Update Meal</button></Link>
                                    <button onClick={() => { handleDelete(meal._id) }} className='mt-3 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-sm'>Delete Meal</button>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* scroll to top icon */}
            <div className="fixed bottom-6 right-6">
                <span onClick={GoToTopIcon} className='text-3xl'><FaCircleArrowUp /></span>
            </div>
        </>
    }
};

export default MyUpload;