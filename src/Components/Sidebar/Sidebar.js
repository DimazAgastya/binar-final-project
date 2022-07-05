import React from 'react';
import './sidebar.css';
import { ImCross } from 'react-icons/im';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { hideSidebar } from "../../store/actions/sidebar";

const SideBar = () => {

    const sidebar = useSelector((state) => state.sidebar);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(hideSidebar());
    }

  return (
    <div className='sidebar' id={ sidebar ? "show-sidebar" : "hide-sidebar"}>
        <ul className='sidebar_links'>
            <li className='sidebar_link'>
                <Link to="/daftar-jual" className="sidebar_menu">Daftar Jual</Link>
            </li>
            <li className='sidebar_link'>
                <Link to="/notification" className="sidebar_menu">Notifikasi</Link>
            </li>
            <li className='sidebar_link'>
                <Link to="/profile" className="sidebar_menu">Profil</Link>
            </li>
        </ul>

        <div className='sidebar_close'>
            <ImCross 
                onClick={() => handleClick()}
            />
        </div>
    </div>
  )
}

export default SideBar