import React from 'react';

const Footer = () => {
  
    return (
       <div className='bg-black'>
        <footer className="footer sm:footer-horizontal  text-neutral-content p-10 mt-20 w-10/12 mx-auto">
  <nav>
    
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
   
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Apps</a>
    <a className="link link-hover">Installation</a>
    
  </nav>
  <nav>
   
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
       </div>
    );
};

export default Footer;