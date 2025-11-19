import React from 'react';
import { FaAppStore, FaGithub, FaHome } from 'react-icons/fa';
import { MdInstallDesktop } from 'react-icons/md';
import { Link, NavLink } from 'react-router';
import logoImg from '../assets/logo.png';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 max-w-[1250px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => isActive ? 'text-primary font-semibold' : ''}
                                >
                                    <FaHome /> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/apps'
                                    className={({ isActive }) => isActive ? 'text-primary font-semibold' : ''}
                                >
                                    <FaAppStore /> Apps
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/installations'
                                    className={({ isActive }) => isActive ? 'text-primary font-semibold' : ''}
                                >
                                    <MdInstallDesktop /> Installations
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link to='/'><img className='h-[50px] w-[50px]' src={logoImg} alt="" /></Link>
                        <Link to='/' className=" font-bold text-3xl">Hero.io</Link>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => isActive ? 'text-primary font-semibold border-b-2 border-primary' : ''}
                            >
                                <FaHome /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/apps'
                                className={({ isActive }) => isActive ? 'text-primary font-semibold border-b-2 border-primary' : ''}
                            >
                                <FaAppStore /> Apps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/installations'
                                className={({ isActive }) => isActive ? 'text-primary font-semibold border-b-2 border-primary' : ''}
                            >
                                <MdInstallDesktop /> Installations
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end ">
                    <Link to='https://github.com/sarafathossen/b12a8.git' className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
                        <FaGithub /> Contribute
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
