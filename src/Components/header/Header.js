import React from 'react'
import './header.css'

import { Container, } from 'react-bootstrap'
import NaV from './NaV';

import Typewriter from 'react-text-type';
import Bnner from '../../assets/images/slider/banner-01.png'


function Header() {

    return (
        <header className='header_top'>
            <NaV />
            <Container className='pt_Nav'>
                <div className='row'>
                    <div className='order-md-2 order-2 order-lg-1 col-lg-7'>
                        <h5 className='header_h5'>WELCOME TO MY WORLD</h5>
                        <h1 className='header_h1'>Hi, I’m <span>Timur</span></h1>
                        <div className="typesss">
                            <Typewriter phrase="Web Developer " className="transition"/>
                        </div>
                        <p className='header_p'>Modern web applications often include three or more levels, and depending on the size of the team the developer is working on, he or she may specialize in one or more of these levels or play a more interdisciplinary role. A web developer is usually classified as a front-end web developer or a back-end web developer.</p>

                        <div className='row'>
                            <div className=" col-lg-12">
                                <span className='header_find'>FIND WITH ME</span>
                                <ul className='ul_header'>
                                    <li>
                                        <a href="#!"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                                    </li>
                                    <li>
                                        <a href="#!"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                                    </li>
                                    <li>
                                        <a href="#!"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                                    </li>
                                    <li>
                                        <a href="#!"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                                    </li>
                                    <li>
                                        <a href="#!"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="order-md-1 order-1 order-lg-2 col-lg-5">
                        <div className="thumbnail">
                            <div className="inner">
                                <img src={Bnner} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header