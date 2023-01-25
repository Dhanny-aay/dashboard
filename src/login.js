


const login = () => {
    return ( 
        <div className=" content px-20 py-[70px] bg-white">
            <div className=" login-container bg-[#f8f8f8] flex flex-col justify-center items-center w-full h-[75vh] shadow-md rounded-[12px] ">
                <p className=" font-extrabold text-4xl mb-8">Bloggy.</p>
                <div className=" flex flex-col bg-white p-10 rounded-md shadow-md items-center space-y-3">
                    <input name="email" className=" bg-[#f8f8f8] h-10 w-[300px] font-montserrat text-[12px] rounded-[6px] p-[8px] font-medium" placeholder="Email" type="text" />
                    <input name="password" className="bg-[#f8f8f8] h-10 w-[300px] font-montserrat text-[12px] rounded-[6px] p-[8px]" placeholder="Password" type="text" />
                    <input name="log-in" className="  bg-black p-2 text-white rounded-md w-[90px] font-semibold font-montserrat text-sm" type="submit" />
                </div>

            </div>
        </div>
     );
}
 
export default login;