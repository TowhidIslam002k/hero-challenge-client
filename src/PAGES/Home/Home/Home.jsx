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

const Home = () => {
    useSetTitle('Home')
    const goToTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' });
    }
    return (
        <div>
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