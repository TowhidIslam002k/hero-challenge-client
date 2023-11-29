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

const Home = () => {
    const {loading, user} = useContext(UserContext)
    useSetTitle('Home')
    const goToTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    // if user is lot logged in then show the login message 
    useEffect(() => {
        setTimeout(() => {
            const hasShownToast = sessionStorage.getItem('hasShownLoginToast');
            if (!hasShownToast) {
                toast.info(<div>
                    <span>Please login to get more access!</span>
                    <span className='flex justify-end mt-5'>
                        <Link to="/login">
                            <button className='link link-hover text-blue-600 border rounded-md'>Login Now</button>
                        </Link>
                    </span>
                </div>, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 5000,
                })
                sessionStorage.setItem("hasShownLoginToast", true)
            }
        }, 5000);
    }, [])

    if(loading){
        <div className=' flex justify-center items-center min-h-screen'>
                <progress className="progress w-96"></progress>
           </div>
    }
    return (
        <div>
            <ScrollToTop />
            {
                !user && <ToastContainer />
            }
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

            <div className="fixed bottom-6 right-6">
                <span onClick={goToTop} className=' text-3xl'><FaCircleArrowUp /></span>
            </div>
        </div>
    );
};

export default Home;