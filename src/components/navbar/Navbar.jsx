import React, { useState } from 'react'
import * as Fa from 'react-icons/fa';
import * as Bi from 'react-icons/bi';
import * as Fi from 'react-icons/fi';
import * as Ri from 'react-icons/ri';
import * as Si from 'react-icons/si';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [sidebar,setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>  
            <div className='navbar'>
                <NavLink to="#">
                    <Ri.RiEyeLine onClick={showSidebar} className='open-eye'/>
                </NavLink>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle' onClick={showSidebar}>
                    <Ri.RiEyeCloseLine className='closed-eye'/>
                </li>
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="selected">
                        <Bi.BiGame/>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" activeClassName="selected">
                        <Si.SiRiotgames/>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="selected">
                        <Fa.FaAtom/>
                    </NavLink>
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
