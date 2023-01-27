import google from './google.png';
import 'animate.css';
import whiteblog from './whiteblog.png'
import { Link } from 'react-router-dom';


const login = () => {
    return ( 
        <div className=" content md:px-32 py-[70px] bg-white flex flex-row ">
            <div className=' bg-black hidden md:block h-[75vh] w-[50%] rounded-l-xl p-8 animate__animated animate__slideInUp animate__slow'>
                <span className=' flex flex-row space-x-1'>
                    <img src={ whiteblog } className=' ' alt="" />
                    <p className=" text-2xl font-extrabold font-montserrat text-white">Bloggy</p>
                </span>
            </div>
            <div className=" login-container bg-[#f8f8f8] w-full flex flex-col md:p-8 items-center md:w-[50%] h-[75vh] rounded-r-xl p-6 relative animate__animated animate__slideInDown animate__slow">
                <p className=' font-montserrat text-xl font-bold capitalize'>Welcome back</p>
                <div className=" flex flex-col w-full items-center space-y-4 mt-12">
                    <input name="email" className=" bg-white h-10 md:w-[350px] w-full font-montserrat text-[12px] rounded-[6px] p-[8px] font-medium" placeholder="Email" type="text" />
                    <input name="password" className="bg-white h-10 md:w-[350px] w-full font-montserrat text-[12px] rounded-[6px] p-[8px]" placeholder="Password" type="text" />
                    <span className=" flex flex-row justify-between w-full">
                        <span className=" flex flex-row items-center space-x-1">
                            <input type="checkbox" name="" value={'yess'} id="" />
                            <p className=" text-xs font-light font-montserrat ">Keep me logged in</p>     
                        </span>
                        <p className=" font-montserrat text-red-500 text-xs cursor-pointer">Forgot your password?</p>
                    </span>
                    <Link className='w-full' to='/home'>
                    <input name="log-in" className=" bg-black hover:bg-white hover:text-black p-2 cursor-pointer text-white rounded-md md:w-[350px] w-full font-semibold delay-200 transition-colors font-montserrat text-sm" type="submit" value={'Login'} />
                    </Link>
                        <p className=" text-xs font-montserrat font-bold ">Or</p>
                        <div className=" w-full rounded-md text-white h-10 bg-black p-2 flex justify-center items-center space-x-3 cursor-pointer delay-200 transition-colors hover:bg-white hover:text-black">
                            <img src={ google } className=' w-[20px]' alt="" />
                            <p className=' font-montserrat text-sm font-semibold'>Sign in with Google</p>
                        </div>
                    <span className=" text-xs font-montserrat font-light">
                        <p>Don't have an account? <span className=" text-gray-500 cursor-pointer">Sign Up</span></p>
                    </span>
                </div>
            </div>
            
        </div>
     );
}
 
export default login;