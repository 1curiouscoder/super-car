import React from 'react'
import Link from '../Components/Link';
import { footer } from '../Data/Data';
const Footer = () => {
    
  return (
    <footer className="flex-col md:justify-center bg-emerald-900  rounded-md">
    <ul className=" flex flex-col sm:flex-row flex-wrap nav justify-center pb-3 mb-3 mx-2 border-b-2 ">
        {
            footer.map(link => <li key={"footer "+link.innerText} className="nav-item py-3 hover:text-slate-500 text-white "><Link href={link.href} className={link.ClassName}>{link.innerText}</Link></li>)
        }
    </ul>
    <p className="font-semibold text-white text-center pb-4">Company, Inc © 2023</p>
  </footer>
  )
}
const commonStyle = "my-4";
export default Footer;