// import React, { useEffect, useState } from 'react';
// import { Input } from './ui/input';
// import { Button } from './ui/button';
// import axios from 'axios';
// import { toast } from 'sonner';
// import { Link, useNavigate } from 'react-router-dom';
// import { Loader2 } from 'lucide-react';
// import { useSelector } from 'react-redux';

// const Signup = () => {
//     const [input, setInput] = useState({
//         username: '',
//         email: '',
//         password: '',
//     });
//     const [loading, setLoading] = useState(false);
//     const { user } = useSelector((store) => store.auth);
//     const navigate = useNavigate();

//     // Handle input changes
//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     // Handle signup logic
//     const signupHandler = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const response = await axios.post(
//                 'https://instaclone-g9h5.onrender.com/api/v1/user/register',
//                 input,
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     withCredentials: true, // Send cookies if necessary
//                 }
//             );

//             if (response.data.success) {
//                 toast.success(response.data.message);
//                 navigate('/login');
//                 setInput({
//                     username: '',
//                     email: '',
//                     password: '',
//                 });
//             }
//         } catch (error) {
//             // Enhanced error handling
//             const errorMessage =
//                 error.response?.data?.message || 'Something went wrong!';
//             toast.error(errorMessage);
//             console.error('Signup error:', errorMessage);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Redirect to home if the user is already logged in
//     useEffect(() => {
//         if (user) {
//             navigate('/');
//         }
//     }, [user, navigate]);

//     return (
//         <div className='flex items-center w-screen h-screen justify-center'>
//             <form
//                 onSubmit={signupHandler}
//                 className='shadow-lg flex flex-col gap-5 p-8 rounded-md'
//             >
//                 <div className='my-4'>
//                     <h1 className='text-center font-bold text-xl'>LOGO</h1>
//                     <p className='text-sm text-center'>
//                         Signup to see photos & videos from your friends
//                     </p>
//                 </div>

//                 {/* Username Input */}
//                 <div>
//                     <label className='font-medium' htmlFor='username'>
//                         Username
//                     </label>
//                     <Input
//                         type='text'
//                         id='username'
//                         name='username'
//                         value={input.username}
//                         onChange={changeEventHandler}
//                         placeholder='Enter your username'
//                         required
//                         className='focus-visible:ring-transparent my-2'
//                     />
//                 </div>

//                 {/* Email Input */}
//                 <div>
//                     <label className='font-medium' htmlFor='email'>
//                         Email
//                     </label>
//                     <Input
//                         type='email'
//                         id='email'
//                         name='email'
//                         value={input.email}
//                         onChange={changeEventHandler}
//                         placeholder='Enter your email'
//                         required
//                         className='focus-visible:ring-transparent my-2'
//                     />
//                 </div>

//                 {/* Password Input */}
//                 <div>
//                     <label className='font-medium' htmlFor='password'>
//                         Password
//                     </label>
//                     <Input
//                         type='password'
//                         id='password'
//                         name='password'
//                         value={input.password}
//                         onChange={changeEventHandler}
//                         placeholder='Enter your password'
//                         required
//                         className='focus-visible:ring-transparent my-2'
//                     />
//                 </div>

//                 {/* Submit Button */}
//                 {loading ? (
//                     <Button disabled>
//                         <Loader2 className='mr-2 h-4 w-4 animate-spin' />
//                         Please wait
//                     </Button>
//                 ) : (
//                     <Button type='submit'>Signup</Button>
//                 )}

//                 <span className='text-center'>
//                     Already have an account?{' '}
//                     <Link to='/login' className='text-blue-600'>
//                         Login
//                     </Link>
//                 </span>
//             </form>
//         </div>
//     );
// };

// export default Signup;




import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import axios from 'axios';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useSelector } from 'react-redux';

const Signup = () => {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const {user} = useSelector(store=>store.auth);
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const signupHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post('http://localhost:8000/api/v1/user/register', input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
                setInput({
                    username: "",
                    email: "",
                    password: ""
                });
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(user){
            navigate("/");
        }
    },[])
    return (
        <div className='flex items-center w-screen h-screen justify-center'>
            <form onSubmit={signupHandler} className='shadow-lg flex flex-col gap-5 p-8'>
                <div className='my-4'>
                    <h1 className='text-center font-bold text-xl'><img src="\insta-kilogram-logo.svg" alt="" /></h1>
                    <p className='text-sm text-center'>Signup to see photos & videos from your friends</p>
                </div>
                <div>
                    <span className='font-medium'>Username</span>
                    <Input
                        type="text"
                        name="username"
                        value={input.username}
                        onChange={changeEventHandler}
                        className="focus-visible:ring-transparent my-2"
                    />
                </div>
                <div>
                    <span className='font-medium'>Email</span>
                    <Input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={changeEventHandler}
                        className="focus-visible:ring-transparent my-2"
                    />
                </div>
                <div>
                    <span className='font-medium'>Password</span>
                    <Input
                        type="password"
                        name="password"
                        value={input.password}
                        onChange={changeEventHandler}
                        className="focus-visible:ring-transparent my-2"
                    />
                </div>
                {
                    loading ? (
                        <Button>
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                            Please wait
                        </Button>
                    ) : (
                        <Button type='submit'>Signup</Button>
                    )
                }
                <span className='text-center'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
            </form>
        </div>
    )
}

export default Signup