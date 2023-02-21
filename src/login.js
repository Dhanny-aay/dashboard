import google from './google.png';
import whiteblog from './whiteblog.png'
import blog from './blog.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { initializeApp } from 'firebase/app'; 
import { getAnalytics } from "firebase/analytics";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithRedirect ,GoogleAuthProvider, getRedirectResult, signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";


const Login = () => {
    
      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyC0orHDJb8M6MIg_P4PrnFS6rXGDr476mA",
        authDomain: "bloggy-2d806.firebaseapp.com",
        projectId: "bloggy-2d806",
        storageBucket: "bloggy-2d806.appspot.com",
        messagingSenderId: "243234796538",
        appId: "1:243234796538:web:e4cd230612d7e07793aa43",
        measurementId: "G-5KHV35BWT2"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const Navigate = useNavigate();

    const signInGo = () => {
        signInWithRedirect(auth, provider);
        // Navigate('/home')
    }

    const signIn = ()=>{
        const email = document.getElementById('email').value;
        const password = document.getElementById('pword').value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user = userCredential.user;
            // console.log(user)
            // console.log('Signed in')
        })
    }
    // check 
    function checkUser(){
        onAuthStateChanged(auth, (user) => {
            if(user){
                Navigate('/home');
            }
        });
    }
    checkUser();

    
    return ( 
        <div className=" content lg:px-32 py-[70px] bg-[#f8f8f8] h-[100vh] md:bg-[white] flex flex-row ">
            <motion.div 
             initial={{ y:850 }}
             animate={{ y:0 }}
             transition={{ type:'spring', stiffness:50 }}
            
            className=' bg-black bg-bloggy bg-cover hidden lg:block h-[75vh] w-[50%] rounded-l-xl p-8'>
                <span className=' flex flex-row space-x-1'>
                    <img src={ whiteblog } className=' ' alt="" />
                    <p className=" text-2xl font-bold font-montserrat text-white">Bloggy</p>
                </span>
            </motion.div>
            <motion.div 
            
            initial={{ y:-850 }}
            animate={{ y:0 }}
            transition={{ type:'spring', stiffness:50 }}
            className=" login-container p-6 bg-[#f8f8f8] flex flex-col lg:p-8 items-center w-full md:w-[75%] md:ml-[12.5%] lg:ml-0 lg:w-[50%] h-[75vh] md:h-[50vh] lg:h-[75vh] rounded-r-xl relative">
            <span className=' lg:hidden flex flex-row items-center justify-center'>
                    <img src={ blog } className=' w-8' alt="" />
                    <p className=' text-xl md:text-2xl font-bold font-montserrat text-[#000]'>Bloggy</p>
                </span>
                <p className=' font-montserrat text-base md:text-xl font-medium md:font-bold capitalize mt-5 lg:mt-0'>Welcome back</p>
                <div className=" flex flex-col w-full items-center space-y-4 mt-12">
                    <input name="email" id='email' className=" bg-white h-10 md:w-[350px] w-full font-montserrat text-[12px] rounded-[6px] p-[8px] font-medium" placeholder="Email" type="text" />
                    <input name="password" id='pword' className="bg-white h-10 md:w-[350px] w-full font-montserrat text-[12px] rounded-[6px] p-[8px]" placeholder="Password" type="text" />
                    <span className=" flex flex-row justify-between w-full md:w-[350px]">
                        <span className=" flex flex-row items-center mr-auto space-x-1">
                            <input type="checkbox" name="" value={'yess'} id="" />
                            <p className=" text-xs font-light font-montserrat ">Keep me logged in</p>     
                        </span>
                        <p className=" font-montserrat text-red-500 text-xs cursor-pointer">Forgot your password?</p>
                    </span>
        
                    <input name="log-in" onClick={ signIn } className=" bg-black hover:bg-white hover:text-black p-2 cursor-pointer text-white rounded-md md:w-[350px] w-full font-semibold delay-200 transition-colors font-montserrat text-sm" type="submit" value={'Login'} />

                        <p className=" text-xs font-montserrat font-bold ">Or</p>
                        <div onClick={ signInGo } className=" w-full md:w-[350px] rounded-md text-white h-10 bg-black p-2 flex justify-center items-center space-x-3 cursor-pointer delay-200 transition-colors hover:bg-white hover:text-black">
                            <img src={ google } className=' w-[20px]' alt="" />
                            <p className=' font-montserrat text-sm font-semibold'>Sign in with Google</p>
                        </div>
                    <span className=" text-xs font-montserrat font-light">
                        <p>Don't have an account? <Link to='/'><span className=" text-gray-500 cursor-pointer">Sign Up</span></ Link></p>
                    </span>
                </div>
            </motion.div>
            
        </div>
     );
}
 
export default Login;   