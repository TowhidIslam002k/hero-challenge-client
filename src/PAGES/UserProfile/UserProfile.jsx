import React, { useContext } from 'react';
import { UserContext } from '../../ContextProviders/AuthProviders';

const UserProfile = () => {
    const {user} = useContext(UserContext)
    const { displayName, email, emailVerified, photoURL } = user;
    
  return (
    <div className="bg-white shadow-md p-4 sm:p-6 md:p-8 max-w-md mx-auto rounded-md my-24">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
        {photoURL && (
          <img
            src={photoURL}
            alt="User Profile"
            className="rounded-full w-16 h-16 sm:w-20 sm:h-20 object-cover mr-4 mb-4 sm:mb-0"
          />
        )}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{displayName}</h2>
          <p className="text-gray-600 mb-2">{email}</p>
          {emailVerified ? (
            <p className="text-green-500">Email Verified</p>
          ) : (
            <p className="text-red-500">Email Not Verified</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
