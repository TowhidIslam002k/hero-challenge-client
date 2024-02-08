import IconCarousel from '../IconCarousel/IconCarousel';
import InstaForum from '../InstaForum/InstaForum';
import CookBook from '../MealsShowcase/CookBook/CookBook';
import Feature from '../MealsShowcase/Feature/Feature';
import Populer from '../MealsShowcase/Populer/Populer';
import Partnership from '../Partnership/Partnership';
import TopCarousel from '../TopCarousel/TopCarousel';
import { FaCircleArrowUp } from "react-icons/fa6";
import useSetTitle from '../../../CustomHooks/useSetTitle';
import FooterCar from '../FooterCarousel/FooterCar';
import MealsCards from '../FeatureMealsCards/MealsCards';
import ScrollToTop from '../../../SHARED/ScrollToTop/ScrollToTop';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../../ContextProviders/AuthProviders';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import GoToTopIcon from '../../../SHARED/GoToTopIcon/GoToTopIcon';

const Home = () => {
    const { loading, user } = useContext(UserContext)
    useSetTitle('Home')

    
    if (loading) {
        return <div className=' flex justify-center items-center min-h-screen'>
            <progress className="progress w-96"></progress>
        </div>
    }

    // // if user is not logged in then show the login message 
    //     useEffect(() => {
    //     setTimeout(() => {
    //         const hasShownToast = sessionStorage.getItem('hasShownLoginToast');
    //         if (!hasShownToast) {
    //             toast.info(<div>
    //                 <span>Please login to get more access!</span>
    //                 <span className='flex justify-end mt-5'>
    //                     <Link to="/login">
    //                         <button className='link link-hover text-blue-600 border rounded-md'>Login Now</button>
    //                     </Link>
    //                 </span>
    //             </div>, {
    //                 position: toast.POSITION.TOP_CENTER,
    //                 autoClose: 3000,
    //             })
    //             sessionStorage.setItem("hasShownLoginToast", true)
    //         }
    //     }, 10000);
    // }, [])

    // // if user is not logged in then show the toast after every 5minutes
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         toast.info(
    //             <div>
    //                 <span>Please login to get more access!</span>
    //                 <span className='flex justify-end mt-5'>
    //                     <Link to="/login">
    //                         <button className='link link-hover text-blue-600 border rounded-md'>Login Now</button>
    //                     </Link>
    //                 </span>
    //             </div>, {
    //             position: toast.POSITION.TOP_CENTER,
    //             autoClose: 3000,
    //         }
    //         );
    //     }, 300000);

    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, []);

    return (
        <div>
            <ScrollToTop />
            {/* <ToastContainer /> */}
            <TopCarousel />
            <IconCarousel />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                <Feature />
                <Populer />
                <CookBook />
            </div>
            <InstaForum />
            <MealsCards />
            <FooterCar />
            <Partnership />

            
            {/* scroll to top icon */}
            <div className="fixed bottom-6 right-6">
                <span onClick={GoToTopIcon} className='text-3xl'><FaCircleArrowUp /></span>
            </div>
        </div>
    );
};

export default Home;