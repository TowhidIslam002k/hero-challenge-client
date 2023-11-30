import { useContext } from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import Swal from 'sweetalert2';
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
            Swal.fire({
                title: 'Email not verifed!',
                text: 'Please verify your email address.',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return <Navigate to='/'></Navigate>;
        }
    }
    if (!user) {
        Swal.fire({
            title: 'Login or Sign up',
            text: 'This is a Private area. Please login or sign up to get all access.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    }
};

export default PrivateRoute;