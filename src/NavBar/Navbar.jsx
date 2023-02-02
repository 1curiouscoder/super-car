import React from 'react'
import { useRef,useState } from 'react';
//import Button from '../Components/Button';
import Image from '../Components/Image';
import { Link } from 'react-router-dom';
import { links } from '../Data/Data';
const Navbar = ({from,payload}) => {
  //const header = useRef(null);
  const {flags, setFlags} = payload;
  //console.log(flags);
  const [navOpen, setnavOpen] = useState(false);
  const linkdata = (from==="profile") ? links.profile : links.default;
  return (
    <header className="fixed w-full h-16 bg-neutral-500 shadow-md transition  ">
        <nav className="container m-auto py-2 lg:px-20 ">
            <div className="relative flex flex-wrap items-center justify-between">
                <div className="relative z-10 w-full px-6 flex items-center justify-between lg:w-auto">
                    <Link to={"/"} onClick={() => navOpen ? setnavOpen(false) : true } className="flex ">
                        <Image link="https://cdn.iconscout.com/icon/premium/png-128-thumb/cab-70-1072472.png" className="w-12 h-12 animate-bounce" >Logo</Image>      
                        <p className='mx-2 font-sans text-xl font-semibold self-center'>LOGO</p> 
                    </Link>

                    <button id="hamburger" className="relative w-10 h-10 lg:hidden" onClick={() => navOpen ? setnavOpen(false) : setnavOpen(true)}>
                    {
                        (from==="profile") ? <div className=''> <Image link="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" className='w-10 h-10'>profile </Image> </div> :
                        (<><div role="hidden" id="line" className="inset-0 w-6 h-0.5 mb-1.5 m-auto rounded-full bg-black transition  duration-100"></div>
                        <div role="hidden" id="line" className="inset-0 w-6 h-0.5 m-auto rounded-full bg-black transition  duration-100"></div>
                        <div role="hidden" id="line2" className="inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-black transition duration-300"></div> </>)
                    }
                    
                    
                    
                    </button>
                </div>

                <div id="navlinks" className={navOpen ? "z-[12] w-full px-6 bg-neutral-500 transition lg:block lg:w-auto lg:px-0 lg:bg-transparent duration-[1000] delay-1000 rounded-xl" : "hidden w-full px-6 bg-white transition lg:block lg:w-auto lg:px-0 lg:bg-transparent"}>
                    <ul className="py-4 text-black text-lg tracking-wide lg:flex lg:space-x-8 lg:py-0">
                        { ( flags.login && from==="profile" ) ? <li className='mt-4 lg:mt-0 self-center'>   { flags.username } </li> : "" }
                        { 
                            linkdata.map( (data) =>   (data.type === "link") ? (<li key={data.key}>
                                    <Link  to={data.to} className={data.styles} onClick={() => setnavOpen(!navOpen) } >{data.innerText}</Link>
                                    </li> ) : (<li className={ (from ==="login") ? "hidden" :"mt-4 lg:mt-0"} key={data.key} >
                                                <Link  to={data.to} className={data.styles} onClick={ () =>{ payload.signout();  setnavOpen(!navOpen);}} >
                                                    <span className={data.span_style}>{data.innerText}</span>  
                                                </Link>
                                            </li>)
                          ) }
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}


export default Navbar;