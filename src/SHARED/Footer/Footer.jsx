import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWifi } from "react-icons/fa6";
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div className='custom-footer-style mt-20 mb-10 lg:flex justify-between items-center font-semibold text-gray-500 bg-base-200 p-5'>
            <p className='hover:text-black'>&#169;Hero challenge | all right reserved</p>
            <div className="flex gap-6 items-center my-5 lg:my-0 set-footer-link">
                <p><Link className='hover:text-black' to=''>Home</Link></p>
                <p><Link className='hover:text-black' to=''>Recipe</Link></p>
                <p><Link className='hover:text-black' to=''>Shop</Link></p>
                <p><Link className='hover:text-black' to=''>About</Link></p>
                <p><Link className='hover:text-black' to=''>Contact</Link></p>
            </div>
            <div className='flex gap-2'>
                <span className='hover:text-black'><FaFacebook /></span>
                <span className='hover:text-black'><FaInstagram /></span>
                <span className='hover:text-black'><FaTwitter /></span>
                <span className='hover:text-black'><FaWifi /></span>
                <span className='hover:text-black'><FaYoutube /></span>
            </div>
        </div>

        </>
    );
};

export default Footer;