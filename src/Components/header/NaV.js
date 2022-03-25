import React from 'react'
import './header.css'
import LOGO from '../../assets/images/logo/favicon.png'
import { Container, Navbar, } from 'react-bootstrap'
import { AiOutlineBars } from 'react-icons/ai';
const NaV = () => {
    return (
        <div>
            <Navbar expand="lg" className='Navbar_fixed'>
                <div className="MyContainer">
                    <Container fluid className='d-flex align-items-center justify-content-between'>
                        <Navbar.Brand href="#">
                            <div className="header_logo">
                                <img src={LOGO} alt="" />
                            </div>
                        </Navbar.Brand>

                        <ul className='Nav_ul d-none d-lg-none d-xl-flex'>
                            <li className='Nav_ul_li'><a href="#home" className='Nav_ul_li_a'> Home</a></li>
                            <li className='Nav_ul_li'><a href="#features" className='Nav_ul_li_a'> Features</a></li>
                            <li className='Nav_ul_li'><a href="#portfolio" className='Nav_ul_li_a'> Portfolio</a></li>
                            <li className='Nav_ul_li'><a href="#resume" className='Nav_ul_li_a'> Resume</a></li>
                            <li className='Nav_ul_li'><a href="#clients" className='Nav_ul_li_a'> Clients</a></li>
                            <li className='Nav_ul_li'><a href="#pricing" className='Nav_ul_li_a'> Pricing</a></li>
                            <li className='Nav_ul_li'><a href="#blog" className='Nav_ul_li_a'> Blog</a></li>
                            <li className='Nav_ul_li'><a href="#contact" className='Nav_ul_li_a'> Contact</a></li>
                        </ul>
                        <div className="Navbar_right">
                            <a href="#!" className="Navbar_right_a d-none d-lg-none d-xl-flex"> BUY NOW</a>
                        </div>
                        <div className="NavButton d-flex d-xl-none">
                            <AiOutlineBars className='NavButton-icon' />
                        </div>
                    </Container>
                </div>
            </Navbar>
        </div>
    )
}

export default NaV