import home from './home.png';
import shape from './shape.png';
import menu from './menu.png';
import calendar from './calendar.png';
import collection from './collection.png';
import settings from './settings.png';
import logout from './logout.png';
import search from './search.png';
import clap from './clap.png';
import wclap from './wclap.png';
import users from './users.png';
import user from './user.png';
import user1 from './user1.png';
import bell from './bell.png';
import book from './book.png';
import next from './next.png';
import lustrate from './lustrate.svg';



function App() {
  return (
    <div className="App bg-white md:py-8 md:pr-8 py-6 pr-6  w-full">
      <div className=" md:relative flex flex-row">
        
        <div className='w-full md:w-[10%] flex md:justify-center items-center md:px-6'>
        <div className=" sidebar md:h-[95vh] rounded-t-2xl md:rounded-[20px]  lg:static md:left-4 fixed bottom-0 md:bottom-8  bg-black md:w-[75px] w-[100%] z-50 md:py-10 shadow py-6 md:px-0 px-3">
          <div className=' flex items-center md:h-full flex-row md:flex-col md:space-y-[35px] relative md:space-x-0'>
            <button className=' w-[40px] hidden h-[40px] rounded-[50%] bg-white md:flex justify-center items-center'>
               <img src={ shape } className=' w-[20px]' alt="" />
            </button>

            <div className='w-full items-center md:space-y-[40px] flex md:flex-col flex-row justify-between md:space-x-0'>
              <button className=''>
                <img src= { home } className=' md:w-[20px] w-[25px]' alt="" />
              </button>
              <button className=''>
                <img src= { menu } className=' md:w-[20px] w-[25px]' alt="" />
              </button>
              <button className=''>
              <img src= { calendar } className=' md:w-[20px] w-[25px]' alt="" />
              </button>
              <button className=''>
              <img src= { collection } className=' md:w-[20px] w-[25px]' alt="" />
              </button>
              <button className=''>
              <img src= { settings } className=' md:w-[20px] w-[25px]' alt="" />
              </button>
              <button className=' block md:hidden '>
              <img src= { logout } className='md:w-[20px] w-[25px]' alt="" />
              </button>
            </div>

            <button className=' absolute hidden md:block bottom-0 '>
              <img src= { logout } className='w-[20px]' alt="" />
            </button>

          </div>
        </div>
        </div>
        
        <div className=' flex lg:flex-row  md:ml-10 lg:ml-0 flex-col w-full md:w-[90%] pl-6 md:pl-0'>
        <div className="second-row md:px-4 relative md:w-full lg:w-[50%]">
          <div className='search-bar relative rounded-[30px]'>
            <input type="" placeholder='Search' className='md:w-[350px] w-[130px] h-[40px] shadow-sm bg-[#f8f8f8] rounded-[30px] px-8 md:px-16 py-2 text-sm font-medium font-montserrat' name="" id=""/>
            <img src={ search } className=' absolute top-3 md:top-3 left-1 md:left-4 w-[20px]' alt="" />
          </div>

          <div className='stats p-6 bg-[#f8f8f8] rounded-2xl mt-8 shadow-sm w-full flex flex-row'>
            <div className=''>
              <p className=' font-montserrat font-bold text-xl '> Hi John Doe.</p>
              <p className=' text-sm mt-4 font-montserrat font-normal text-gray-600'>Welcome back John Doe. We are glad you are here.</p>
              <p className=' text-sm font-montserrat font-normal text-gray-600'>Inspire the best work in people, enabling them to achieve their goals.</p>
              <button className=' bg-black mt-5 p-3 rounded-xl text-center font-montserrat font-medium text-sm text-white'>
              View Details
              </button>
            </div>
            <img src= { lustrate } className=' w-32' alt="" />
          </div>

          <div className=' flex flex-row px-2 py-3'>
            <p className=' font-montserrat text-sm font-bold '>Trending Blogs</p>
            <p className=' ml-auto font-montserrat text-xs font-normal text-gray-700'>View All</p>
          </div>

          <div className=' flex md:flex-row flex-col md:space-y-0 space-y-8 mt-2 md:space-x-5 w-full '>
            <div className=' bg-[#f8f8f8] p-3 rounded-2xl shadow-sm'>
              <p className=' font-montserrat font-medium text-base'>Prototyping</p>
              <p className=' text-xs font-montserrat font-light mt-2 p-1 text-gray-600'>A prototype is an early example, model or projection of a product to test ideas until it is brought to life.</p>
              <div className=' flex flex-row mt-2'>
                <img src={ users } className=' h-6 w-6 mr-auto' alt="" />
                <div className='ml-auto flex flex-row space-x-1'>
                  <img src={ clap } className='' alt="" />
                  <p className=' font-montserrat text-sm font-medium tracking-tighter'>1.5k</p>
                </div>
              </div>
            </div>
            
            <div className=' bg-black p-3 rounded-2xl shadow-sm'>
              <p className=' font-montserrat font-medium text-base text-gray-300'>Prototyping</p>
              <p className=' text-xs  font-montserrat font-light mt-2 p-1 text-gray-300'>A prototype is an early example, model or projection of a product to test ideas until it is brought to life.</p>
              <div className=' flex flex-row mt-2'>
                <img src={ users } className=' h-6 w-6 mr-auto' alt="" />
                <div className='ml-auto flex flex-row space-x-1'>
                  <img src={ wclap } className='' alt="" />
                  <p className='text-gray-300 font-montserrat text-sm font-medium tracking-tighter'>1.5k</p>
                </div>
              </div>
            </div>

            <div className=' bg-[#f8f8f8] p-3 rounded-2xl shadow-sm'>
              <p className=' font-montserrat font-medium text-base'>Prototyping</p>
              <p className=' text-xs font-montserrat font-light mt-2 p-1 text-gray-600'>A prototype is an early example, model or projection of a product to test ideas until it is brought to life.</p>
              <div className=' flex flex-row mt-2'>
                <img src={ users } className=' h-6 w-6 mr-auto' alt="" />
                <div className='ml-auto flex flex-row space-x-1'>
                  <img src={ clap } className='' alt="" />
                  <p className=' font-montserrat text-sm font-medium tracking-tighter'>1.5k</p>
                </div>
              </div>
            </div>
          </div>

          <div className=' p-5 bg-[#f8f8f8] mt-5 shadow-sm rounded-2xl'>
            <div className=' flex flex-row'>
              <p className=' text-black font-montserrat font-bold text-[20px]'>Analytics</p>
              <div className=' ml-auto flex flex-row'>
                <button className=' py-1 px-2 rounded-l-lg text-xs font-montserrat font-medium bg-black text-gray-300 hover:bg-white'>Weekly</button>
                <button className=' py-1 px-2 rounded-r-lg text-xs font-montserrat font-medium text-gray-300 bg-white hover:bg-black'>Monthly</button>
              </div>
            </div>

          </div>
        </div>

        <div className=' third-row lg:w-[50%] md:w-full md:pl-4 md:pr-2 px-0 '>
          <div className=' ml-auto flex justify-end lg:static absolute top-4 md:top-0 right-6 md:right-0'>
            <div className=' flex items-center space-x-2'>
              <img src= { bell } className='' alt="" />
              <select name="language" className=' font-montserrat text-xs font-light text-gray-700 md:block hidden' id="">
                <option value="EN">EN</option>
                <option value="FR">FR</option>
                <option value="LT">LT</option>
              </select>
            </div>

            <div className=' flex flex-row ml-7 space-x-2 items-center justify-center'>
              <div className=' '>
                <p className=' font-montserrat text-gray-700 font-bold text-sm'>John Doe</p>
                <p className=' font-montserrat text-gray-700 font-normal text-xs text-right'>England</p>
              </div>
              <img src= { user } className=' w-[40px] h-[40px]' alt="" />
            </div>
          </div>

          <div className=' second-col bg-[#f8f8f8] p-6 mt-8 shadow-sm rounded-2xl space-y-5 md:mb-0 mb-16'>
            <div className=' bg-white p-3 rounded-xl shadow-md flex flex-row items-center'>
              <div className=' flex flex-row'>
              <div className=' w-[40px] h-[40px] bg-[#ffeeaa] shadow flex items-center justify-center rounded-lg '>
                <img src= { book } className=' w-[25px]' alt="" />
              </div>
              <div className='flex flex-col ml-4'>
                <p className=' font-montserrat font-medium text-sm'>Articles Published</p>
                <p className=' font-montserrat font-bold text-base '>80</p>
              </div>
              </div>
              <button className='bg-[#f8f8f8] w-[30px] h-[30px] rounded-[50%] ml-auto flex justify-center items-center'>
                <img src={ next } className='w-[20px]' alt="" />
              </button>
            </div>
            
            <div className=' bg-white p-3 rounded-xl shadow-md flex flex-row items-center'>
              <div className=' flex flex-row'>
              <div className=' w-[40px] h-[40px] bg-[#bfe7fa] shadow flex items-center justify-center rounded-lg '>
                <img src= { clap } className=' w-[25px]' alt="" />
              </div>
              <div className='flex flex-col ml-4'>
                <p className=' font-montserrat font-medium text-sm'>Articles Published</p>
                <p className=' font-montserrat font-bold text-base '>80</p>
              </div>
              </div>
              <button className='bg-[#f8f8f8] w-[30px] h-[30px] rounded-[50%] ml-auto flex justify-center items-center'>
                <img src={ next } className='w-[20px]' alt="" />
              </button>
            </div>


            <div className=' bg-white p-3 rounded-xl shadow-md flex flex-row items-center'>
              <div className=' flex flex-row'>
                <div className=' w-[40px] h-[40px] bg-[#f8f8f8] shadow flex items-center justify-center rounded-lg '>
                  <img src= { user1 } className=' w-[25px]' alt="" />
                </div>
                <div className='flex flex-col ml-4'>
                  <p className=' font-montserrat font-medium text-sm'>Articles Published</p>
                  <p className=' font-montserrat font-bold text-base '>80</p>
                </div>
              </div>
              <button className='bg-[#f8f8f8] w-[30px] h-[30px] ml-auto rounded-[50%] flex justify-center items-center'>
                <img src={ next } className='w-[20px]' alt="" />
              </button>
            </div>

            <div className=' py-1 flex flex-row'>
              <p className='font-bold text-black font-montserrat text-sm'>Followers</p>
              <p className=' text-gray-700 font-montserrat font-light ml-auto text-xs'>View All</p>
            </div>
            
            <div className=' overflow-x-scroll hidescroll'>
              <div className=' inline-flex space-x-8'>
                <div className=' relative w-[100px] h-[100px] bg-white rounded-lg bg-shot1 bg-cover'>
                  <div className=' text-center font-montserrat p-2 text-white font-medium text-xs w-full h-[30px] rounded-t-xl bg-transparent-rgba absolute bottom-0'>
                    John Martell
                  </div>
                </div>
                <div className=' relative w-[100px] h-[100px] bg-white rounded-lg bg-shot2 bg-cover'>
                  <div className='text-center font-montserrat p-2 text-white font-medium text-xs w-full h-[30px] rounded-t-xl bg-transparent-rgba absolute bottom-0'>
                    John Paul
                  </div>
                </div>
                <div className=' relative w-[100px] h-[100px] bg-white rounded-lg bg-shot3 bg bg-cover'>
                  <div className='text-center font-montserrat p-2 text-white font-medium text-xs w-full h-[30px] rounded-t-xl bg-transparent-rgba absolute bottom-0'>
                    John Carter
                  </div>
                </div>
                <div className=' relative w-[100px] h-[100px] bg-white rounded-lg bg-shot4 bg-cover'>
                  <div className='text-center font-montserrat p-2 text-white font-medium text-xs w-full h-[30px] rounded-t-xl bg-transparent-rgba absolute bottom-0'>
                    Elia Martell
                  </div>
                </div>
                <div className=' relative w-[100px] h-[100px] bg-white rounded-lg bg-shot2 bg-cover'>
                  <div className='text-center font-montserrat p-2 text-white font-medium text-xs w-full h-[30px] rounded-t-xl bg-transparent-rgba absolute bottom-0'>
                    Who?...Me?
                  </div>
                </div>
              </div>

            </div>

            <div className=' w-full bg-white p-6 flex justify-center items-center rounded-2xl shadow-sm flex-col'>
              <p className=' text-center font-montserrat text-sm font-normal capitalize'>
                Buy <span className=' font-bold'>PRO Account</span> to explore<br></br>Premium Features
              </p>
              <button className=' p-2 mt-2 bg-black rounded-md text-white font-montserrat text-sm'>
                Purchase Now
              </button>

            </div>

          </div>

        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
