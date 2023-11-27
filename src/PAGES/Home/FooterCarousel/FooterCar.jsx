import Slider from 'react-slick';
import './FooterCar.css'
import img1 from '../../../assets/footer-carousel/h1-clients-img-1.png'
import img2 from '../../../assets/footer-carousel/h1-clients-img-2a.png'
import img3 from '../../../assets/footer-carousel/h1-clients-img-3a.png'
import img4 from '../../../assets/footer-carousel/h1-clients-img-4a.png'
import img5 from '../../../assets/footer-carousel/h1-clients-img-5a.png'
import img6 from '../../../assets/footer-carousel/h1-clients-img-6a.png'

const FooterCar = () => {
    const settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        mobileFirst: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },

        ]
    };
    return (
        <div className='my-32 border border-gray-200 w-10/12 mx-auto footer-car'>
            <Slider {...settings}>
                <div className='w-2/4 py-10'>
                <img className='mx-auto' src={img1} alt="" />
                </div>
                <div className='w-2/4 py-10'>
                <img className='mx-auto' src={img2} alt="" />
                </div>
                <div className='w-2/4 py-10'>
                <img className='mx-auto' src={img3} alt="" />
                </div>
                <div className='w-2/4 py-10'>
                <img className='mx-auto' src={img4} alt="" />
                </div>
                <div className='w-2/4 py-10'>
                <img className='mx-auto' src={img5} alt="" />
                </div>
                <div className='w-2/4 py-10'>
                <img className='mx-auto' src={img6} alt="" />
                </div>
                {/* <img className='w-2/4 py-10' src={img2} alt="" />
                <img className='w-2/4 py-10' src={img3} alt="" />
                <img className='w-2/4 py-10' src={img4} alt="" />
                <img className='w-2/4 py-10' src={img5} alt="" />
                <img className='w-2/4 py-10' src={img6} alt="" /> */}
            </Slider>
        </div>
    );
};

export default FooterCar;