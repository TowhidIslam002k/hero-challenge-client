import { Link, useLoaderData } from 'react-router-dom';
import SideBar from '../../SideBar/SideBar';
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa6';
import './CarouselCardDetails.css'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import YouMayLike from '../YouMayLike/YouMayLike';
import Reply from '../Reply/Reply';
import ScrollToTop from '../../../SHARED/ScrollToTop/ScrollToTop';

const CarouselCardDetails = () => {
    const { carouselData, featureData } = useLoaderData();
    const { _id, title, authorImage, authorName, description, duration, makingType, populerity, ratings, recipeImage, serves, uploadDate } = carouselData;
    return (
        <div className='md:grid grid-cols-3 gap-10 mt-24'>
            <ScrollToTop />
            <div className="col-span-2">
                <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold mb-8'>{title}</h1>
                <div className="mt-5 flex items-center gap-5 custom-d-block">
                    <div className="flex items-center gap-1">
                        <Link className='w-12'><img src={authorImage} alt="" /></Link>
                        <div className="text-sm">
                            <p>{authorName}</p>
                            <p className='-mt-1'>{uploadDate}</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="sm:flex items-center gap-2 set-social-icon grid grid-cols-3">
                            <span className='font-bold text-2xl sm:text:1xl'>Share: </span>
                            <span className='bg-blue-700 text-white flex gap-2 items-center py-2 px-3 text-sm set-custom-padding'><FaFacebook /> Facebook</span>
                            <span className='bg-cyan-600 text-white flex gap-2 items-center py-2 px-3 text-sm set-custom-padding'><FaTwitter /> Twitter</span>
                            <span className='bg-red-600 text-white flex gap-2 items-center py-2 px-3 text-sm set-custom-padding'><FaLinkedin /> Linkedin</span>
                            <span className='bg-blue-500 text-white flex gap-2 items-center py-2 px-3 text-sm set-custom-padding'><FaPinterest /> Pinterest</span>
                        </div>
                    </div>
                </div>
                <div className='mt-7 mb-5'>
                    <img src={recipeImage} alt="" />
                </div>
                <div className="sm:flex text-center items-center text-xs gap-5 font-bold justify-center set-custom-gap">
                    <div className="w-full sm:w-20 md:w-8 lg:w-24 xl:w-36 h-1 border border-b-gray-400 border-t-gray-400"></div>
                    <p className='mt-5 sm:mt-0'>{duration}</p>
                    <p className='mt-5 sm:mt-0'>{makingType}</p>
                    <p className='mt-5 sm:mt-0'>{serves}</p>
                    <p className='my-5 sm:my-0'>{populerity}</p>
                    <div className="w-full sm:w-20 md:w-8 lg:w-24 xl:w-36 h-1 border border-b-gray-400 border-t-gray-400"></div>
                </div>

                {/* details================== */}
                <div className="pr-3 mt-8">
                    <p className=' text-gray-600'>{description}</p>
                </div>

                {/* ratings=============== */}
                <div className="mt-8 flex gap-5 py-2 px-4 bg-yellow-200 ">
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={ratings}
                        readOnly={true}
                        isRequired
                    />
                    <div className="">
                        <p>{ratings} out of 5</p>
                    </div>
                </div>

                {/* you may like this area...... */}
                <YouMayLike data={featureData} />

                {/* leave a reply compo */}
                <Reply />
            </div>

            {/* right navbar on specific data load page */}
            <SideBar data={featureData} />
        </div>
    );
};

export default CarouselCardDetails;