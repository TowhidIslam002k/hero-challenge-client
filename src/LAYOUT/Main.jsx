import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserContext } from '../ContextProviders/AuthProviders';
import Footer from '../SHARED/Footer/Footer';
import Header from '../SHARED/Header/Header';

const Home = () => {
   
    return (
        <>
        <div className='w-10/12 mx-auto my-2'>
            <Header />
            <Outlet />
            <Footer />
        </div>
        </>
    );
};

export default Home;