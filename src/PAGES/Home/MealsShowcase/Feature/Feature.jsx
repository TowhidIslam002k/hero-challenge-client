import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClockRotateLeft, FaRegThumbsUp, FaRegBookmark } from "react-icons/fa6";

const Feature = () => {

    const [feature, setFeature] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/feature')
        .then(res => res.json())
        .then(data => setFeature(data))
    },[])
    return (
        <div>
            <div className="flex w-full items-center gap-5 mb-10">
                <h1 className='text-xl font-bold'>Feature</h1>
                <div className="cus-border mt-2"></div>
            </div>
            {feature && feature.slice(0, 1).map((meal) => {
                    return (
                        <div key={meal?._id} className="p-2">
                            <Link><img className='' src={meal?.recipeImage} alt="" /></Link>
                            <div className="p-2">
                                <div className="flex items-center justify-start gap-5">
                                    <span className='flex items-center text-xs '><FaClockRotateLeft />{meal?.duration}</span>
                                    <span className='flex items-center text-xs'><FaRegThumbsUp />{meal?.makingType}</span>
                                </div>

                                <Link><h1 className='text-2xl lg:text-md mt-2'>{meal?.title}</h1></Link>

                                <div className='mt-3'>
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
        </div>
    );
};

export default Feature;