import google from './google.png';
import whiteblog from './whiteblog.png'
import blog from './blog.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { initializeApp } from 'firebase/app'; 
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithRedirect ,GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


const Register = () => {

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
    const db = getFirestore(app);
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    

    const Navigate = useNavigate();

    const signInGoo = () => {
        signInWithRedirect(auth, provider)
        .then((result)=>{
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            const err = document.getElementById('error');
            err.innerHTML=errorCode;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            
          });
    }

    // create user 
    // const [mail, setMail ] = useState('');
    // const [pword, setPword ] = useState('');
    const signUp = ()=>{
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('pword').value;

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user = userCredential.user;
            const userDoc = collection(db, 'users');

            const docData = {
                uid: user.uid,
                email: email,
                displayname: name,
            }
            addDoc(userDoc, docData);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const err = document.getElementById('error');
            err.innerHTML=errorCode;
          });
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
            
            className=' bg-[#000] bg-bloggy bg-cover  hidden lg:block h-[75vh] w-[50%] rounded-l-xl p-8 relative'>
                <span className=' flex flex-row space-x-1'>
                    <img src={ whiteblog } className=' ' alt="" />
                    <p className=" text-2xl font-bold font-montserrat text-[#fff]">Bloggy</p>
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
                <p className=' font-montserrat text-base md:text-xl font-medium md:font-bold capitalize mt-5 lg:mt-0'>Welcome to Bloggy</p>
                <div className=" flex flex-col w-full items-center space-y-4 mt-12">
                    <input name="name" id='name' className=" bg-white h-10 md:w-[350px] w-full font-montserrat text-[12px] rounded-[6px] p-[8px] font-medium" placeholder="Full name" type="text" />
                    <input name="email" id='email' className=" bg-white h-10 md:w-[350px] w-full font-montserrat text-[12px] rounded-[6px] p-[8px] font-medium" placeholder="Email" type="text" />
                    <input name="password" id='pword' className="bg-white h-10 md:w-[350px] w-full font-montserrat text-[12px] rounded-[6px] p-[8px]" placeholder="Password" type="text" />
                    <p id='error' className=' md:w-[350px] w-full  text-left -mt-4 text-red-600 text-xs font-medium font-montserrat'></p>
                    <input name="log-in" className=" bg-black hover:bg-white hover:text-black p-2 cursor-pointer text-white rounded-md w-full md:w-[350px] font-semibold delay-200 transition-colors font-montserrat text-sm" type="submit" onClick={ signUp } value={'Sign Up'} />
                        <p className=" text-xs font-montserrat font-bold">Or</p>
                        <button onClick={ signInGoo } className=" md:w-[350px]  w-full rounded-md text-white h-10 bg-black p-2 flex justify-center items-center space-x-3 cursor-pointer delay-200 transition-colors hover:bg-white hover:text-black">
                            <img src={ google } className=' w-[20px]' alt="" />
                            <p className=' font-montserrat text-sm font-semibold'>Sign in with Google</p>
                        </button>
                    <span className=" text-xs font-montserrat font-light">
                        <p>Already have an account? <Link to="/login"><span className=" text-gray-500 cursor-pointer">Sign in</span></Link></p>
                    </span>
                </div>
            </motion.div>
            
        </div>
     );
}
 
export default Register;