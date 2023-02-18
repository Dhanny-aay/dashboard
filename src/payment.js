import chip from './chip.png';
import visa from './visa.png';
import mastercard from './mastercard.png';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Payment = () => {
       // function to update card 
       const [cardNo, setCardNo] = useState('**** **** **** ****');
       const [cvv, setCvv] = useState('155');
       const [name, setName] = useState('John Doe');
       const [exp, setExp] = useState('19/28');

       const newCardNo = () =>{
        const newNo = document.getElementById('cardNumber').value;
        // console.log(newNo)
        const spaceNo = newNo.match(/.{1,4}/g);
        // console.log(spaceNo.join(' '));
        setCardNo(spaceNo.join(' '));
        if(spaceNo === ''){
            setCardNo('**** **** **** ****')
        }
       };

       const newCvv = ()=>{
        const cvvNew = document.getElementById('cvv').value;
        setCvv(cvvNew)
        if(cvvNew===''){
            setCvv('155')
        }
       };

       const newName = ()=>{
        const nameNew = document.getElementById('name').value;
        setName(nameNew)
        if(nameNew===''){
            setName('John Doe')
        }
       };

       const newExp = ()=>{
        const New = document.getElementById('exp').value;
        if(New.length == 2){
            const expNew = New+'/';
            setExp(expNew);
            if(New == ''){
                setExp('John Doe')
            }
        }
       };


    return ( 
        <div className=" py-[70px] lg:px-[15%] bg-[#f1f1f1] lg:bg-white h-[100vh]">
            <motion.div 
                initial={{ y:850 }}
                animate={{ y:0 }}
                transition={{ type:'spring', stiffness:40, damping:15 }}
            
            className=" bg-[#f1f1f1] w-full lg:block flex flex-col justify-center items-center pb-[170px] rounded-[18px] py-5 px-8 relative">
                <p className=" font-montserrat font-semibold text-lg">Payment method</p>
                <p className=" font-montserrat font-medium text-sm mt-6 mb-3 lg:mb-0">Credit Card</p>
                <motion.div 
                    initial={{ y:-1000 }}
                    animate={{ y:0 }}
                    transition={{delay:1.2, type:'spring', stiffness:30,}}
                    className=' lg:absolute right-12 space-x-3 top-24 ml-auto md:ml-[245px]'>
                    <button className='px-1 py-[2px] shadow-sm bg-white rounded-md'><img src={ mastercard } alt="" className=' w-[32px]' /></button>
                    <button className='px-1 py-[2px] shadow-sm bg-white rounded-md'><img src={ visa } alt="" className=' w-[32px]' /></button>
                </motion.div>
                <motion.div 
                        initial={{ y:-1000 }}
                        animate={{y:0}}
                        transition={{delay:1, type:'spring', stiffness:30,}}
                        className=" lg:absolute static mt-3 right-8 top-36 md:w-[340px] w-full rounded-xl shadow-2xl h-[200px] bg-black">
                        <div className=' w-full h-full relative'>
                            <img src={ chip } className=' absolute top-5 left-5 h-[40px]' alt="" />
                            <p className=' absolute text-white font-mono text-base font-medium top-16 left-5'>{ cardNo }</p>
                            <span className=' absolute bottom-5 left-5'>
                                <p className=' text-gray-400 text-[10px] font-montserrat  '>Card Holder</p>
                                <p className=' text-white text-xs font-mono  '>{ name }</p>
                            </span>
                            <span className=' absolute bottom-5 right-5'>
                                <p className=' text-gray-400 text-[10px] font-montserrat  '>Expiry Date</p>
                                <p className=' text-white text-xs font-mono  '>{ exp }</p>
                            </span>
                            <span className=' absolute bottom-5 right-[168px]'>
                                <p className=' text-gray-400 text-[10px] font-montserrat  '>CVV</p>
                                <p className=' text-white text-xs font-mono  '>{ cvv }</p>
                            </span>  
                        </div>

                    </motion.div>
                <div className=" w-full md:w-[350px] lg:block flex items-center flex-col">
                    <div className=" flex flex-col mt-5 w-full md:w-[350px] items-start md:items-start">
                        <label htmlFor="name" className=" text-[10px] font-montserrat text-gray-400">Card Holder Name</label>
                        <input type="text" id="name" placeholder='John Doe' onInput={ newName }  className=" placeholder:text-xs md:w-[350px] w-full p-2 rounded-md mt-1" />
                    </div>

                    <div className=" flex flex-col mt-5 w-full md:w-[350px]">
                        <label htmlFor="cardNumber"  className=" text-[10px] font-montserrat text-gray-400">Card Number</label>
                        <input type="text" id='cardNumber' onInput={ newCardNo } name="cardNumber" className=" w-full md:w-[350px] p-2 rounded-md mt-1" />
                    </div>

                    <div className=" flex flex-row w-full md:w-[350px] justify-between mt-5">
                        <div className="flex flex-col">
                            <label htmlFor="edate" className=" text-[10px] font-montserrat text-gray-400">Expiry Date</label>
                            <input type="text" id='exp' onInput={ newExp } name="edate" placeholder='19/28' className=" placeholder:text-xs w-[90%] p-2 rounded-md mt-1" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="cvv" className=" text-[10px] font-montserrat text-gray-400">CVV Code</label>
                            <input type="text" id='cvv' onInput={ newCvv } placeholder='155' maxLength={3} name="cvv" className=" w-[100%] placeholder:text-[12px] p-2 rounded-md mt-1" />
                        </div>
                    </div>
                    <button className=" bg-black px-5 mt-5 mr-auto rounded-2xl font-montserrat text-sm py-[10px] text-white">Submit</button>
                    <span className=" font-montserrat flex-col w-[350px] flex text-red-600 text-[10px] md:absolute mt-10 bottom-10">*Disclaimer:<p className=" text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu dignissim erat, egestas rhoncus tellus. Nam eu erat tincidunt nibh aliquet mollis quis at.</p></span>
                </div>            
            </motion.div>
        </div>
     );
}
 
export default Payment;