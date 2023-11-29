import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
            <NavLink
            to={to}
            className={({isActive}) => (isActive ? 'text-green-400 font-bold hover:text-yellow-300' : '')}
            >
                {children}
            </NavLink>
    );
};

export default ActiveLink;