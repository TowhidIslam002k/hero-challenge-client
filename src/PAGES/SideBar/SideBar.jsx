import topImg from '../../assets/sideBar/top-img.jpg'
import authorImg from '../../assets/sideBar/author-img.png'
import signeture from '../../assets/sideBar/signeture.png'
import sidebar1 from '../../assets/sideBar/sidebar-img-1.jpg'
import sidebar2 from '../../assets/sideBar/sidebar-img-2.jpg'
import { Link } from 'react-router-dom'

const SideBar = ({ data }) => {
    return (
        <div>
            <div className="">
                <img src={topImg} alt="" />
            </div>

            {/* About me */}
            <div className="text-center my-14 py-2 px-3 border border-gray-200">
                <p className='-mt-5 font-bold px-3'>About me</p>
                <img className='mx-auto my-5' src={authorImg} alt="" />
                <p className='mt-6'>I create simple, delicious recipes that require 10 ingredients or less, one bowl, or 30 minutes or less to prepare.</p>
                <img className='mx-auto my-12' src={signeture} alt="" />
            </div>

            <div className="">
                <img src={sidebar1} alt="" />
                <img className='mt-10' src={sidebar2} alt="" />
            </div>

            {/* from */}
            <div className="text-center my-20 py-14 px-3 bg-base-200">
                <h1 className="text-2xl font-bold mb-5">Never Miss A Post!</h1>
                <p className='font-bold text-gray-600'>Sign up for free and be the first to get notified about updates.</p>

                <input className='block w-10/12 border outline-none mx-auto h-10 my-5 placeholder:pl-3' type="text" placeholder='Email Address' required />
                <button className='py-2 px-6 bg-black hover:bg-gray-600 text-white w-10/12 mx-auto'>Submit</button>
            </div>

            {/* latest food */}

            <div className="py-2 px-4 border border-gray-200">
                <p className='font-bold text-center text-lg -m-6'>Latest Recipe</p>
                {
                    data && data.slice(4, 7).map(meal => <div key={meal?._id} className="">
                        <Link to={`/meal/${meal?._id}`}>
                            <div className="lg:flex gap-4 mb-5 mt-10">
                                <img className='lg:w-2/5' src={meal?.recipeImage} alt="" />
                                <p className="font-semibold mt-5 sm:text-lg">{meal?.title}</p>
                            </div>
                        </Link>
                    </div>)
                }
            </div>

        </div>
    );
};

export default SideBar;