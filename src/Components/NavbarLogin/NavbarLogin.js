import React from 'react';
import './navbarLogin.css';
import Home from '../../Pages/Home/Home';
import { Link } from 'react-router-dom';

import { BiListUl } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsPerson } from 'react-icons/bs';

import { GiHamburgerMenu } from 'react-icons/gi';

const NavbarLogin = () => {
  return (
    <>
     <header id="navlogin" className='mb-5'>
        <div className="container pt-2">
            <div className="d-flex m-2 align-items-center">
                {/* LOGO */}
                <div className="col-auto">
                    <Link to='/'><img src="/images/logo.png" alt="LogoSecondHand" className="logo" /></Link>
                </div>
                
                {/* SEARCH */}
                <div className='col-auto mx-4 flex-grow-1'>
                    <form className="form-inline">
                        <input className="form-control form-search" type="text" placeholder="Search..." aria-label="Search" />
                        {/* <button type="submit"><FiSearch /></button> */}
                    </form>
                </div>

                <div className="menu-sm col-auto d-lg-none"><GiHamburgerMenu /></div>
                <div className="col-auto d-none d-lg-block">
                    <ul className="list-group-horizontal">
                        <li className="list-inline-item"><Link to='/list' className='icons'><BiListUl /></Link></li>
                        <li className="list-inline-item">
                            <div className='dropdown-notif'>
                                <Link to='/notification' className='icons icon-notif'><IoIosNotificationsOutline /></Link>
                                <div className='dropdown-content-notif'>
                                    <div className='align-items-center flex-notif'>
                                        <Link to='/info-penawaran' className='content-notif'>1</Link>
                                        <Link to='/info-penawaran' className='content-notif'>2</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-inline-item"><Link to='/profile' className='icons'><BsPerson /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </>
  );
};

export default NavbarLogin;