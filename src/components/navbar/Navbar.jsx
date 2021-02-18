import React, { useState } from 'react'
import * as Fa from 'react-icons/fa';
import * as Bi from 'react-icons/bi';
import * as Fi from 'react-icons/fi';
import * as Ri from 'react-icons/ri';
import * as Si from 'react-icons/si';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [sidebar,setSidebar] = useState(false);

    const showSidebar = ()=> setSidebar(!sidebar);

    return (
        <>  
            <div className='navbar'>
                <Link to="#">
                    <Ri.RiEyeLine onClick={showSidebar} className='open-eye'/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle' onClick={showSidebar}>
                    <Ri.RiEyeCloseLine className='closed-eye'/>
                </li>
                <li className="nav-item">
                    <Bi.BiGame/>
                </li>
                <li className="nav-item">
                    <Si.SiRiotgames/>
                </li>
                <li className="nav-item">
                    <Fa.FaAtom/>
                </li>
                <li className="nav-item">
                    <Fi.FiSlack/>
                </li>
                <li className="nav-item">
                    <Ri.RiMedal2Line/>
                </li>
            </ul>
            </nav>
        </>
    )
}

export default Navbar
