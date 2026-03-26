import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  
    return (
       <div className='bg-black'>
        <footer className="footer sm:footer-horizontal border-b  text-neutral-content p-10 mt-20 w-10/12 mx-auto">
  <nav>
    
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='list-none'>
   
    <Link to='/'><li className=' font-semibold text-sm'>Home</li></Link>
    <Link to='/apps'><li className=' font-semibold text-sm'>Apps</li></Link>
    <Link to='installation'><li className=' font-semibold text-sm'>Installation</li></Link>
  </nav>
  <nav>
   
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  
</footer>
<div className='pb-5 pt-5'>
            <p className='text-[#FFFFFF] text-sm flex justify-center'>&copy; 2026 HERO.IO. All rights reserved.</p>
         </div>
 
       </div>
    );
};

export default Footer;