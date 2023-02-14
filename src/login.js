import google from './google.png';
import whiteblog from './whiteblog.png'
import blog from './blog.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const login = () => {
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
                    <input name="email" className=" bg-white h-10 md:w-[350px] w-full font-montserrat text-[12px] rounded-[6px] p-[8px] font-medium" placeholder="Email" type="text" />
                    <input name="password" className="bg-white h-10 md:w-[350px] w-full font-montserrat text-[12px] rounded-[6px] p-[8px]" placeholder="Password" type="text" />
                    <span className=" flex flex-row justify-between w-full md:w-[350px]">
                        <span className=" flex flex-row items-center mr-auto space-x-1">
                            <input type="checkbox" name="" value={'yess'} id="" />
                            <p className=" text-xs font-light font-montserrat ">Keep me logged in</p>     
                        </span>
                        <p className=" font-montserrat text-red-500 text-xs cursor-pointer">Forgot your password?</p>
                    </span>
                    <Link className=' w-full justify-center flex' to='/home'>
                    <input name="log-in" className=" bg-black hover:bg-white hover:text-black p-2 cursor-pointer text-white rounded-md md:w-[350px] w-full font-semibold delay-200 transition-colors font-montserrat text-sm" type="submit" value={'Login'} />
                    </Link>
                        <p className=" text-xs font-montserrat font-bold ">Or</p>
                        <div className=" w-full md:w-[350px] rounded-md text-white h-10 bg-black p-2 flex justify-center items-center space-x-3 cursor-pointer delay-200 transition-colors hover:bg-white hover:text-black">
                            <img src={ google } className=' w-[20px]' alt="" />
                            <p className=' font-montserrat text-sm font-semibold'>Sign in with Google</p>
                        </div>
                    <span className=" text-xs font-montserrat font-light">
                        <p>Don't have an account? <span className=" text-gray-500 cursor-pointer">Sign Up</span></p>
                    </span>
                </div>
            </motion.div>
            
        </div>
     );
}
 
export default login;