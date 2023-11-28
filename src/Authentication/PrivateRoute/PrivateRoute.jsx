import { useContext } from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import { UserContext } from '../../ContextProviders/AuthProviders';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext)
    const provider = user?.providerData[0]?.providerId;

    const location = useLocation();
    if (loading) {
        return <div className=' flex justify-center items-center min-h-screen'>
            <progress className="progress w-96"></progress>
        </div>
    }
    if (user) {
        if (user.emailVerified || provider === "github.com") {
            return children;
        }
        else {
            alert('Please verify your email address.')
            return <Navigate to='/recipe'></Navigate>;
        }
    }
    if (!user) {
        alert('This is a Private area. Please login or sign up to get all access.');
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    }
};

export default PrivateRoute;