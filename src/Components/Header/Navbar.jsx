import React from 'react';
import logo from "/src/assets/logo.png"
import { FaGithub } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
    <NavLink 
        to='/' 
        className={({ isActive }) => isActive ? 'm-2 font-semibold text-[#632EE3] text-sm border-b-2 border-[#632EE3]' : 'm-2 font-semibold text-sm'}
    >
        Home
    </NavLink>

    <NavLink 
        to='/apps' 
        className={({ isActive }) => isActive ? 'm-2 font-semibold text-[#632EE3] text-sm border-b-2 border-[#632EE3]' : 'm-2 font-semibold text-sm'}
    >
        Apps
    </NavLink>

    <NavLink 
        to='/installation' 
        className={({ isActive }) => isActive ? 'm-2 font-semibold text-[#632EE3] text-sm border-b-2 border-[#632EE3]' : 'm-2 font-semibold text-sm'}
    >
        Installation
    </NavLink>
</>;
    return (
        <div className='w-10/12 mx-auto'>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    
       <Link to='/'>
       <a className="btn btn-ghost flex items-center gap-2 normal-case px-2 md:px-4">
    <img 
        className="w-8 h-8 md:w-10 md:h-10 object-contain" 
        src={logo} 
        alt="logo" 
    />
    <span className="text-sm md:text-lg font-bold text-[#632EE3]">
        HERO.IO
    </span>
</a>
       </Link>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/Tanbiru' className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-[#FFFFFF]"><FaGithub></FaGithub> Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;