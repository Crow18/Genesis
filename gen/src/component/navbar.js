import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../images/MyLogo.png';
import '../style/navbar.scss'

export default function Navbar(){
    return(
        <>
        <div className="navbar-container">
        <div className="logo-container">
            <img src={Logo} alt="feather"/>
            <h4>
                Genesys
            </h4>
        </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>About</li>
                <li>Contact</li>
                |
                <li>Login</li>
            </ul>
        </div>
        </>
    )
}