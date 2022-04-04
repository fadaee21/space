import React from 'react'
import logo from '../../assets/shared/logo.svg'
import hamburger from '../../assets/shared/icon-hamburger.svg'
import close from '../../assets/shared/icon-close.svg'
import { NavLink } from 'react-router-dom'
import './header.style.css'
import { Link } from 'react-router-dom'


export const Header = () => {
    const [slide, setSlide] = React.useState(false);
    const handleSlide = () => { setSlide(false) }
    return (

        <div className="container-fluid navHead">
            <div className="header">
                <Link to='/'> <img src={logo} alt="logo" /></Link>
                <img onClick={() => setSlide(true)} src={hamburger} alt="hamburger" />
            </div>
            <div className="line"></div>
            <div className={`slideMenu ${slide ? "slideOn" : " "} `}>
                <img onClick={handleSlide} src={close} alt="close button" />
                <ul className='listItem' >
                    <li onClick={handleSlide} >  <NavLink to='/'> <span>00</span> HOME</NavLink> </li>
                    <li onClick={handleSlide} >  <NavLink to='/destination'> <span>01</span> DESTINATION</NavLink> </li>
                    <li onClick={handleSlide} > <NavLink to='/crew'> <span>02</span> CREW</NavLink> </li>
                    <li onClick={handleSlide} >  <NavLink to='/technology'> <span>03</span> TECHNOLOGY</NavLink> </li>
                </ul>

            </div>
        </div>


    )
}
