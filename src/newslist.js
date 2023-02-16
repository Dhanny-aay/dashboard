import newsimg from './news.png';
// import { useState, useEffect } from 'react';
import next from './next.png';
import { motion } from 'framer-motion';

const Newslist = (props) => {
  const news = props.news

  console.log(props, news)

  return ( 
    <div className=' space-y-2'>
      {news.slice(0, 3).map((newss) =>(
        <div className='w-full bg-white py-2 px-3 rounded-xl shadow-md flex flex-row items-center' key={newss.source_id}>
          <span className=' w-[40px] h-[40px] bg-[#f1f1f1] flex items-center justify-center shadow rounded-lg'>
            <img src={ newsimg } className=' w-[24px] ' alt="" />
          </span>
            <p className=' font-medi fumont-montserrat text-[12px] text-black ml-2'>{ newss.title }</p>
          <a className=' ml-auto' href={ newss.link }>
          <button className='bg-[#f8f8f8] w-[30px] h-[30px] rounded-[50%] ml-auto flex justify-center items-center'>
            <img src={ next } className='w-[20px]' alt="" />
          </button>
          </a>
        </div>
    ))}
    </div>
   );
}
 
export default Newslist;