import google from './google.png';
import login from './login.svg'
import 'animate.css';
import whiteblog from './whiteblog.png'
import { Link } from 'react-router-dom';


const register = () => {
    return ( 
        <div className=" content px-32 py-[70px] bg-white flex flex-row ">
            <div className=' bg-[#1b1c1e] h-[75vh] w-[50%] rounded-l-xl p-8 animate__animated animate__slideInUp animate__slow relative'>
                <span className=' flex flex-row space-x-1'>
                    <img src={ whiteblog } className=' ' alt="" />
                    <p className=" text-2xl font-extrabold font-montserrat text-white">Bloggy</p>
                </span> 
                <img src={ login } className='' alt="" />
            </div>
            <div className=" login-container bg-[#f8f8f8] flex flex-col p-8 items-center w-[50%] h-[75vh] rounded-r-xl relative animate__animated animate__slideInDown animate__slow">
                <p className=' font-montserrat text-xl font-bold capitalize'>Welcome to Bloggy</p>
                <div className=" flex flex-col items-center space-y-4 mt-12">
                    <input name="email" className=" bg-white h-10 w-[350px] font-montserrat text-[12px] rounded-[6px] p-[8px] font-medium" placeholder="Full Name" type="text" />
                    <input name="email" className=" bg-white h-10 w-[350px] font-montserrat text-[12px] rounded-[6px] p-[8px] font-medium" placeholder="Email" type="text" />
                    <input name="password" className="bg-white h-10 w-[350px] font-montserrat text-[12px] rounded-[6px] p-[8px]" placeholder="Password" type="text" />
                    <input name="log-in" className=" bg-black hover:bg-white hover:text-black p-2 cursor-pointer text-white rounded-md w-full font-semibold delay-200 transition-colors font-montserrat text-sm" type="submit" value={'Sign Up'} />
                        <p className=" text-xs font-montserrat font-bold">Or</p>
                        <div className=" w-full rounded-md text-white h-10 bg-black p-2 flex justify-center items-center space-x-3 cursor-pointer delay-200 transition-colors hover:bg-white hover:text-black">
                            <img src={ google } className=' w-[20px]' alt="" />
                            <p className=' font-montserrat text-sm font-semibold'>Sign Up with Google</p>
                        </div>
                    <span className=" text-xs font-montserrat font-light">
                        <p>Already have an account? <Link to="/login"><span className=" text-gray-500 cursor-pointer">Sign in</span></Link></p>
                    </span>
                </div>
            </div>
            
        </div>
     );
}
 
export default register;