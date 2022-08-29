import React, { } from 'react';
import { FACEBOOK, GITHUB, INSTAGRAM, LINKED_IN, Twitter } from '../config';

const Header = () => {
    return(
        <>
            <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile text-center">
                        <img src='imgs/profile/logo.png' placeholder="blur" width="100%"
                        height="100%" alt="Imad Najmi Dev" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">Imad Najmi</a></h1>
                        <div className="social-links mt-3 text-center">
                        <a href={Twitter} className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href={FACEBOOK} className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href={INSTAGRAM} className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href={GITHUB} className="google-plus"><i className="bx bxl-github"></i></a>
                        <a href={LINKED_IN} className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                             <li><a href="#experience" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Experience</span></a></li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
{/*                             <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
 */}                            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                            <li><a href="#blog" className="nav-link scrollto"><i className="bx bx-folder-open"></i> <span>Blog</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
