import React from 'react'
import { useRef,useState } from 'react';
//import Button from '../Components/Button';
import Image from '../Components/Image';
import { Link } from 'react-router-dom';
import { links, profileLinks } from '../Data/Data';
const Navbar = ({from,payload}) => {
  //const header = useRef(null);
  const {flags, setFlags} = payload;
  //console.log(flags);
  const [navOpen, setnavOpen] = useState(null);
  const linkdata = (from==="profile") ? links.profile : links.default;
  return (
    <header className="fixed w-full h-16 bg-neutral-500 shadow-md transition ">
        <nav className="container m-auto py-2 lg:px-20 ">
            <div className="relative w-full flex flex-wrap items-center justify-between ">
                
                <div className='order-2 lg:order-1 px-4'>
                    <Link to={"/"} onClick={() => navOpen ? setnavOpen(false) : true } className="flex ">
                        <Image link="https://cdn.iconscout.com/icon/premium/png-128-thumb/cab-70-1072472.png" className="w-12 h-12 animate-bounce" >Logo</Image>      
                        
                    </Link>
                </div>
                <div className='order-1 px-4'>
                    <button id="hamburger" className="relative w-10 h-10 lg:hidden" onClick={() => navOpen === 'nav' ? setnavOpen(false) : setnavOpen('nav')}>
                        <><div role="hidden" id="line" className="inset-0 w-6 h-0.5 mb-1.5 m-auto rounded-full bg-black transition  duration-100"></div>
                        <div role="hidden" id="line" className="inset-0 w-6 h-0.5 m-auto rounded-full bg-black transition  duration-100"></div>
                        <div role="hidden" id="line2" className="inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-black transition duration-300"></div> </>
                    </button>
                </div> 

                <div id="navlinks" className={navOpen === 'nav' ? "order-4 z-[12] w-full px-6 bg-neutral-500 transition lg:block lg:w-auto lg:px-0 lg:bg-transparent duration-[1000] delay-1000 rounded-xl" : "order-2 hidden w-full px-6 bg-white transition lg:block lg:w-auto lg:px-0 lg:bg-transparent"}>
                    <ul className="py-4 text-black text-lg tracking-wide lg:flex lg:flex-grow lg:space-x-8 lg:py-0">
                        { 
                            linkdata.map( (data) =>   (data.type === "link") ? (
                            <li key={data.key}>
                                    <Link  to={data.to} className={data.styles} onClick={() => setnavOpen(false) } >{data.innerText}</Link>
                                        </li> ) : (<li className={ (from ==="login") ? "hidden nav-links" :"mt-4 lg:mt-0 nav-links"} key={data.key} >
                                                    <Link  to={data.to} className={data.styles+ " nav-links"} onClick={ () =>{ payload.signout();  setnavOpen(!navOpen);}} >
                                                        <span className={data.span_style}>{data.innerText}</span>  
                                    </Link>
                            </li>)
                          ) }
                    </ul>
                </div>

        <div className={from=="profile" ? "order-3 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" : 'hidden'}>
            <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
        </button>

        
        <div className="relative ml-3">
          <div>
            <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => navOpen === 'profile' ? setnavOpen(false) : setnavOpen('profile')}>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </button>
          </div>

          <div className={navOpen === "profile" ? "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" : 'hidden'} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
           { profileLinks.map( (data) => (data.type==="link") ? (<Link  to={data.to} className={data.styles} key={data.key} >
                <span className="" role={data.role} tabIndex={data.tabIndex} id={data.id}>{data.innerText}</span> 
            </Link>) : (<Link  to={data.to} className={data.styles} key={data.key} onClick={() =>{ payload.signout();  setnavOpen(false);}}>
                <span className="" role={data.role} tabIndex={data.tabIndex} id={data.id}>{data.innerText}</span> 
            </Link>))}
          </div>
        </div>
        </div>
            </div>
        </nav>
    </header>
  )
}


export default Navbar;