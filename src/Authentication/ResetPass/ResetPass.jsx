import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import useSetTitle from '../../CustomHooks/useSetTitle';
import app from '../../FirebaseConfig/Firebase.config';

const ResetPass = () => {
    useSetTitle('Reset Pass')
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth(app)

    const handleResetPassword = () => {
        setError('')
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("We've sent a Password reset email. Please check your email and reset you password. Then login with you email and new password.");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
            });
    };

    return (
        <>
        <div className="hero min-h-screen bg-base-200 mt-16">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-primary">Reset Password</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body respo">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" 
                            placeholder="Enter your email" 
                            className="input input-bordered" 
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleResetPassword} className="btn btn-primary">Send Reset Email</button>
                        </div>
                    <p className='text-red-500'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ResetPass;