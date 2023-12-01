import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../ContextProviders/AuthProviders';
import ActiveLink from '../Activelink/ActiveLink';
import './Header.css';
import { FaRegBookmark, FaRegUser } from "react-icons/fa6";

const Header = () => {
    const { user, loading } = useContext(UserContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible(currentScrollPos <= 0 || prevScrollPos > currentScrollPos);

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    function toggleMobileMenu() {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    // get carted item price value from local Storage...
    const getItems = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;
    for (let i = 0; i < getItems.length; i++) {
        if (!isNaN(parseInt(getItems[i].price))) {
            totalPrice += parseInt(getItems[i].price);
        }
    }

    return (
        <>
            <div
                className={`navbar bg-primary text-primary-content rounded-b-lg fixed top-0 w-10/12 mx-auto transition-all duration-300 
                ${visible ? 'opacity-100' : 'opacity-0 -translate-y-full'} z-50`}
            >
                <div className="flex-1">
                    <h1 className="btn btn-ghost normal-case text-xl site-title">BEST TEST</h1>
                </div>
                <div className="mr-10 hidden lg:flex anchor-design">
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/Post">Post-Meal</ActiveLink>
                    <ActiveLink to="/Bookmark">
                        <span className="flex gap-1 items-center">
                            <FaRegBookmark />Favorite
                        </span>
                    </ActiveLink>
                    <ActiveLink to="/cart">{`Cart ${totalPrice === 0 ? '($0.00)' : ('$' + totalPrice)}`}</ActiveLink>
                    {loading ? '' : (!user && <ActiveLink to="/register">register</ActiveLink>)}
                </div>

                {/* when display is large then hide the hamburger menu  */}
                {!mobileMenuOpen && <div className="lg:hidden">
                    <button className="mobile-menu-button p-2 me-4 hambarg-btn" onClick={toggleMobileMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>}


                {/* if user exist then show the user image else show login button */}
                { loading? <FaRegUser className='font-2xl mr-5' /> : (user ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt={user?.displayName} />
                                <div className="tooltip">{user?.displayName}</div>
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52  text-gray-400 font-bold">
                            <li>
                                <Link to='/profile' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to='/public'>Publlic-Post</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><a>Settings</a></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </ul>
                    </div>
                ) : (
                    <Link to="/login"><button className="btn btn-warning login-btn-res">Login</button></Link>
                ))}


                {/* Here Design a navbar for less then lagre devices  */}
                <div className="relative mobile_menu transform transition-all">
                    {mobileMenuOpen && (
                        <div className="lg:hidden pt-2 mobile-anchor bg-primary text-primary-content absolute top-8 -left-48 min-h-screen ">
                            <ActiveLink to="/">Home</ActiveLink>
                            <ActiveLink to="/post">Post-Meal</ActiveLink>
                            <ActiveLink to="/Bookmark">
                                <span className="flex gap-1 items-center">
                                    <FaRegBookmark />Favorite
                                </span>
                            </ActiveLink>
                            <ActiveLink to="/cart">{`Cart ${totalPrice === 0 ? '($0.00)' : ('$' + totalPrice)}`}</ActiveLink>
                            <ActiveLink to='/public'>Publlic-Post</ActiveLink>
                            <ActiveLink to="/about">About Us</ActiveLink>
                            <ActiveLink to='/contact'>Contact</ActiveLink>
                            {loading ? '' : (!user && <ActiveLink to="/register">register</ActiveLink>)}
                            <ActiveLink to='/logout'>Logout</ActiveLink>
                        </div>
                    )}

                    {mobileMenuOpen && <button
                        onClick={() => toggleMobileMenu(false)}
                        className="absolute top-11 -right-2 text-gray-600 hover:text-gray-800 focus:outline-none lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 rounded-full bg-red-500 hover:bg-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>}
                </div>
            </div>
        </>
    );
};

export default Header;