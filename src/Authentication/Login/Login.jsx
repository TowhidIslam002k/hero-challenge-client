import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../ContextProviders/AuthProviders';
import './Login.css';
import { FaEyeSlash, FaEye } from 'react-icons/fa6'
import google from '../../assets/images/google.png'
import github from '../../assets/images/github.png'
import useSetTitle from '../../CustomHooks/useSetTitle';

const Login = () => {
    useSetTitle("Login")
    const [err, setErr] = useState('');
    const navigate = useNavigate();
    const { loginUser, loginWithGoogle, loginWithGithub } = useContext(UserContext);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // console.log(location)

    const handleFromData = event => {
        event.preventDefault();
        setErr('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        loginUser(email, password)
            .then(result => {
                const userCredential = result.user;
                // console.log(userCredential);
                if (!userCredential.emailVerified) {
                    window.alert("Please verify your account by clicking on the link sent to you at " + userCredential.email);
                    navigate(from, {replace: true}) 
                }
                navigate(from, {replace: true}) 
            })
            .catch(error => {
                // console.log(error)
                setErr(error.message)
            })
    }


    // login with google and github..........
    const handleGoogleSignIn = () => {
        loginWithGoogle()
        .then(result => {
            console.log(result.user)
            setErr('')
            navigate(from, { replace: true })
        })
        .catch(err => setErr(err.message))
    }

    const handleGithubSignIn = () => {
        loginWithGithub()
        .then(result => {
            console.log(result.user)
            setErr('')
            navigate(from, { replace: true })
        })
        .catch(err => setErr(err.message))
    }
// login with google and github end//////

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }
    return (
        <>
        <div className="hero min-h-screen bg-base-200 mt-16 w-auto custom-bg-set">
            <div className="hero-content flex-col md:flex-row-reverse ">
                <div className="text-center md:text-left">
                    <h1 id='resize-font' className="text-5xl text-primary font-bold">Login now!</h1>
                    <p id='suggest' className='py-6 font-bold'>Login with your email and password to get more access. Your data is secure with us.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleFromData} className="card-body respo ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {/* <input type="password" name='password' placeholder="password" className="input input-bordered" /> */}
                            <div className="relative">
                                <input type={passwordVisible ? "text" : "password"}
                                    name='password' placeholder="password"
                                    className="input input-bordered w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <i
                                    className={`toggle-password absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${passwordVisible ? 'text-blue-500' : 'text-gray-500'
                                        }`}
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </i>
                            </div>
                            <label className="label">
                                <Link to="/register" className="label-text-alt link link-hover">Don't have any account?</Link>
                            </label>
                            <label className="label">
                                <Link to="/reset" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-red-500'>{err}</p>
                    </form>
                        <button onClick={handleGoogleSignIn} className='text-black border w-5/6 mx-auto border-black rounded-md font-bold hover:text-white hover:bg-black flex justify-center items-center'>
                            <img className=' w-1/12 object-cover' src={google} alt="" /> Continue with google
                        </button>
                        <button onClick={handleGithubSignIn} className='text-black border w-5/6 mx-auto mt-2 mb-7 border-black rounded-md font-bold hover:text-white hover:bg-black flex justify-center items-center'>
                            <img className=' rounded-xl w-1/12 object-cover' src={github} alt="" /> Continue with github
                        </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;