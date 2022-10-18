import React, { } from 'react';
import { FACEBOOK, GITHUB, INSTAGRAM, LINKED_IN, Twitter } from '../config';
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile text-center">
                        <img src='imgs/profile/logo.png' placeholder="blur" width="100%"
                            height="100%" alt="Imad Najmi Dev" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><Link href="/">Imad Najmi</Link></h1>
                        {/* <div className="social-links mt-3 text-center">
                        <a href={Twitter} className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href={FACEBOOK} className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href={INSTAGRAM} className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href={GITHUB} className="google-plus"><i className="bx bxl-github"></i></a>
                        <a href={LINKED_IN} className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div> */}
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li>
                                <a href="#hero" className="nav-link scrollto active">
                                    <span><svg width={24} height={24} fill='white' version="1.1" x="0px" y="0px" viewBox="0 0 58.365 58.365" style={{ "enable-background": "new 0 0 58.365 58.365" }}>
                                        <path d="M57.863,26.632l-8.681-8.061V5.365h-10v3.921L29.182,0L0.502,26.632c-0.404,0.376-0.428,1.009-0.052,1.414
                                        c0.375,0.404,1.008,0.427,1.414,0.052l3.319-3.082v33.349h16h16h16V25.015l3.319,3.082c0.192,0.179,0.437,0.267,0.681,0.267
                                        c0.269,0,0.536-0.107,0.732-0.319C58.291,27.641,58.267,27.008,57.863,26.632z M41.182,7.365h6v9.349l-6-5.571V7.365z
                                        M23.182,56.365V35.302c0-0.517,0.42-0.937,0.937-0.937h10.126c0.517,0,0.937,0.42,0.937,0.937v21.063H23.182z M51.182,56.365h-14
                                        V35.302c0-1.62-1.317-2.937-2.937-2.937H24.119c-1.62,0-2.937,1.317-2.937,2.937v21.063h-14V23.158l22-20.429l14.28,13.26
                                        l5.72,5.311v0l2,1.857V56.365z"/>
                                        </svg>
                                    </span>
                                    &nbsp;<span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="nav-link scrollto">
                                    <span>
                                        <svg version="1.1" x="0px" y="0px" fill="white"
                                            viewBox="0 0 489 489" style={{ "enable-background": "new 0 0 489 489" }} width={24} height={24}>
                                            <g>
                                                <path d="M417.4,71.6C371.2,25.4,309.8,0,244.5,0S117.8,25.4,71.6,71.6S0,179.2,0,244.5s25.4,126.7,71.6,172.9S179.2,489,244.5,489
                                                s126.7-25.4,172.9-71.6S489,309.8,489,244.5S463.6,117.8,417.4,71.6z M244.5,462C124.6,462,27,364.4,27,244.5S124.6,27,244.5,27
                                                S462,124.6,462,244.5S364.4,462,244.5,462z"/>
                                                <path d="M244.5,203.2c35.1,0,63.6-28.6,63.6-63.6s-28.5-63.7-63.6-63.7s-63.6,28.6-63.6,63.6S209.4,203.2,244.5,203.2z
                                                M244.5,102.9c20.2,0,36.6,16.4,36.6,36.6s-16.4,36.6-36.6,36.6s-36.6-16.4-36.6-36.6S224.3,102.9,244.5,102.9z"/>
                                                <path d="M340.9,280.5c-22.3-32.8-54.7-49.5-96.4-49.5s-74.1,16.6-96.4,49.5c-16.6,24.4-27.2,57.7-31.4,98.7
                                                c-0.8,7.4,4.6,14.1,12,14.8c7.4,0.8,14.1-4.6,14.8-12c8.5-82.3,42.5-124,101-124s92.5,41.7,101,124c0.7,6.9,6.6,12.1,13.4,12.1
                                                c0.5,0,0.9,0,1.4-0.1c7.4-0.8,12.8-7.4,12-14.8C368.1,338.1,357.5,304.9,340.9,280.5z"/>
                                            </g>
                                        </svg>
                                    </span>
                                    &nbsp;<span>About</span>
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="nav-link scrollto">
                                    <span>
                                        <svg version="1.1" x="0px" y="0px" fill='white'
                                            width="24px" height="24px" viewBox="0 0 32 32" style={{ "enable-background": "new 0 0 32 32" }}>
                                            <g>
                                                <g>
                                                    <path className="open_een" d="M28.5,4h-25C2.673,4,2,4.673,2,5.5v14C2,20.327,2.673,21,3.5,21h23c0.276,0,0.5-0.224,0.5-0.5
                                                    S26.776,20,26.5,20h-23C3.225,20,3,19.775,3,19.5v-14C3,5.225,3.225,5,3.5,5h25C28.775,5,29,5.225,29,5.5v19
                                                    c0,0.275-0.225,0.5-0.5,0.5h-25C3.225,25,3,24.775,3,24.5v-1C3,23.224,2.776,23,2.5,23S2,23.224,2,23.5v1
                                                    C2,25.327,2.673,26,3.5,26H15v2h-4c-0.276,0-0.5,0.224-0.5,0.5S10.724,29,11,29h9c0.276,0,0.5-0.224,0.5-0.5S20.276,28,20,28h-4
                                                    v-2h12.5c0.827,0,1.5-0.673,1.5-1.5v-19C30,4.673,29.327,4,28.5,4z"/>
                                                    <circle className="open_een" cx="15.5" cy="23" r="0.5" />
                                                </g>
                                                <g>
                                                    <path className="open_een" d="M28.5,4h-25C2.673,4,2,4.673,2,5.5v14C2,20.327,2.673,21,3.5,21h23c0.276,0,0.5-0.224,0.5-0.5
                                                    S26.776,20,26.5,20h-23C3.225,20,3,19.775,3,19.5v-14C3,5.225,3.225,5,3.5,5h25C28.775,5,29,5.225,29,5.5v19
                                                    c0,0.275-0.225,0.5-0.5,0.5h-25C3.225,25,3,24.775,3,24.5v-1C3,23.224,2.776,23,2.5,23S2,23.224,2,23.5v1
                                                    C2,25.327,2.673,26,3.5,26H15v2h-4c-0.276,0-0.5,0.224-0.5,0.5S10.724,29,11,29h9c0.276,0,0.5-0.224,0.5-0.5S20.276,28,20,28h-4
                                                    v-2h12.5c0.827,0,1.5-0.673,1.5-1.5v-19C30,4.673,29.327,4,28.5,4z"/>
                                                    <circle className="open_een" cx="15.5" cy="23" r="0.5" />
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    &nbsp;<span>Experience</span>
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="nav-link scrollto">
                                    <span>

                                        <svg version="1.1" x="0px" y="0px" fill='white' width={24} height={24}
                                            viewBox="0 0 482.8 482.8" style={{ "enable-background": "new 0 0 482.8 482.8" }}>
                                            <g>
                                                <path d="M431.3,114.5c-1.4-3.3-3.5-6.4-6.1-8.9l-101.9-98c-2.5-2.4-5.4-4.3-8.6-5.6l0,0c-3.2-1.3-6.6-2-10.1-2H109
                                                    C76,0,49.3,26.7,49.3,59.7v363.4c0,33,26.7,59.7,59.7,59.7h264.8c33,0,59.7-26.7,59.7-59.7v-298
                                                    C433.5,121.5,432.7,117.9,431.3,114.5z M405.3,423.2c0,17.4-14.2,31.5-31.5,31.5H109c-17.4,0-31.5-14.2-31.5-31.5V59.8
                                                    c0-17.4,14.1-31.5,31.5-31.5h186.7V74c0,32.9,26.8,59.7,59.7,59.7h49.9V423.2z"/>
                                                <path d="M110,241.5L110,241.5c0,7.7,6.3,14.1,14.1,14.1h237.1c7.7,0,14.1-6.3,14.1-14.1l0,0c0-7.7-6.3-14.1-14.1-14.1H124.1
                                                    C116.3,227.4,110,233.8,110,241.5z"/>
                                                <path d="M361.1,283.7h-237c-7.7,0-14.1,6.3-14.1,14.1l0,0c0,7.7,6.3,14.1,14.1,14.1h237.1c7.7,0,14.1-6.3,14.1-14.1l0,0
                                                    C375.2,290,368.9,283.7,361.1,283.7z"/>
                                                <path d="M361.1,340h-237c-7.7,0-14.1,6.3-14.1,14.1l0,0c0,7.7,6.3,14.1,14.1,14.1h237.1c7.7,0,14.1-6.3,14.1-14.1l0,0
                                                C375.2,346.3,368.9,340,361.1,340z"/>
                                                <path d="M255.1,396.2H122.9c-7.7,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h132.3c7.7,0,14.1-6.3,14.1-14.1
                                                S262.9,396.2,255.1,396.2z"/>
                                                <path d="M172.2,201.3h61.9c-0.3-25.7,0.7-39.5-16-45.6c-15.2-5.8-24.2-11.7-24.2-11.7l-11.7,36.9l-1.6,5l-5.2-14.8
                                                c12-16.8-0.9-17.6-3.2-17.6l0,0l0,0l0,0l0,0l0,0l0,0c-2.2,0-15.2,0.8-3.2,17.6l-5.2,14.8l-1.6-5L150.4,144c0,0-9.1,5.9-24.2,11.7
                                                c-16.7,6.1-15.7,19.8-16,45.6H169L172.2,201.3L172.2,201.3z"/>
                                                <path d="M145.8,120.6c1.3,8.7,8,19.7,19,23.6c4.5,1.6,9.5,1.6,14,0c10.8-3.9,17.7-14.9,19.1-23.6c1.5-0.1,3.4-2.2,5.4-9.5
                                                c2.8-10-0.2-11.5-2.7-11.2c0.5-1.4,0.9-2.7,1.1-4.1c4.3-25.8-8.4-26.7-8.4-26.7s-2.1-4.1-7.7-7.1c-3.7-2.2-8.9-3.9-15.7-3.3
                                                c-2.2,0.1-4.3,0.5-6.3,1.2l0,0c-2.5,0.8-4.8,2.1-6.9,3.5c-2.6,1.6-5,3.6-7.1,5.9c-3.4,3.4-6.4,7.9-7.7,13.5
                                                c-1.1,4.2-0.8,8.5,0.1,13.1l0,0c0.2,1.4,0.6,2.7,1.1,4.1c-2.5-0.2-5.5,1.2-2.7,11.2C142.5,118.4,144.4,120.5,145.8,120.6z"/>
                                            </g>
                                        </svg>
                                    </span>
                                    &nbsp;<span>Portfolio</span>
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="nav-link scrollto">
                                    <span>
                                        <svg version="1.1" x="0px" y="0px" fill='white' height={24} width={24}
                                            viewBox="0 0 496 496" style={{ "enable-background": "new 0 0 496 496" }}>
                                            <g>
                                                <path d="M453.888,250.576L432,228.688l-48,48V244.16l-40-32.008V0H40v212.152L0,244.16V496h352.232H384v-3.656
                                                c64.016-14.512,112-71.76,112-140.112C496,313.832,481.048,277.728,453.888,250.576z M432,251.312l10.576,10.576
                                                c0.712,0.712,1.32,1.488,2.008,2.208L400,308.688L387.312,296L432,251.312z M384,315.312l31.032,31.032
                                                c3.12,3.12,3.12,8.192,0,11.312L384,388.688V315.312z M368,299.312v105.376l-10.344,10.344c-3.128,3.128-8.184,3.128-11.312,0
                                                L296,364.688l-8.184,8.184l-36.56-27.024L368,263.448v29.24L364.688,296L368,299.312z M308.688,400l-44.584,44.584
                                                c-0.728-0.688-1.504-1.296-2.216-2.008L251.312,432L296,387.312L308.688,400z M344,232.648l18.688,14.952L344,260.792V232.648z
                                                M56,272V16h272v256h0.12l-90.424,63.832L192,302.056l-45.696,33.776L55.88,272H56z M40,232.648v28.144L21.312,247.6L40,232.648z
                                                M16,263.448l116.744,82.408L16,432.144V263.448z M16,480v-27.968l176-130.088l84.376,62.368L228.688,432l21.888,21.888
                                                c10.664,10.664,22.752,19.376,35.776,26.112H16z M378.92,477.152l-4.208,0.744c-0.088,0.016-0.176,0.024-0.264,0.04
                                                c-3.776,0.664-7.4,1.152-10.936,1.496c-3.72,0.328-7.472,0.568-11.28,0.568c-27.704,0-53.976-8.888-75.824-25.096L320,411.312
                                                l15.032,15.032c9.36,9.36,24.576,9.36,33.936,0l57.376-57.376c9.36-9.36,9.36-24.576,0-33.936L411.312,320l43.592-43.592
                                                C471.112,298.256,480,324.536,480,352.232C480,413.528,436.6,464.84,378.92,477.152z"/>
                                                                            <path d="M312,32H72v144h240V32z M296,160H88V48h208V160z" />
                                                <rect x="72" y="192" width="240" height="16" />
                                                <rect x="72" y="224" width="240" height="16" />
                                                <rect x="296" y="256" width="16" height="16" />
                                                <rect x="264" y="256" width="16" height="16" />
                                                <rect x="72" y="256" width="176" height="16" />
                                            </g>
                                        </svg>
                                    </span>
                                    &nbsp;<span>Contact</span>
                                </a>
                            </li>
                            <li>
                                <a href="#blog" className="nav-link scrollto">
                                    <span>
                                        <svg version="1.1" x="0px" y="0px" fill='white' height={24} width={24}
                                            viewBox="0 0 324 324" style={{ "enable-background": "new 0 0 324 324" }}>
                                            <path d="M255.8,100.6h-3.4c-1.2,0-3-1.8-3-3V64.8c0-29.7-23.8-53.8-53-53.8H69.2c-29.2,0-53,24.1-53,53.8
                                            v194.4c0,29.7,23.8,53.8,53,53.8h185.6c29.2,0,53-24.1,53-53.8v-104C307.8,126,284.5,101.5,255.8,100.6z M93.2,67.4h74.4
                                            c14.9,0,27,12.1,27,27c0,14.4-11.9,26.3-27.1,27H93.2c-14.9,0-27-12.1-27-27S78.3,67.4,93.2,67.4z M241.1,250.2H92.4
                                            c-14.9,0-27-12.1-27-27s12.1-27,27-27h148c14.9,0,27,12.1,27,27C267.4,237.6,255.8,249.4,241.1,250.2z"/>
                                            <path d="M69.2,300c-21.6,0-40-18.4-40-40.8V64.8c0-22.4,17.6-40.8,40-40.8h126.4c21.6,0,40,18.4,40,40.8v32.8
                                            c0,8.8,7.2,16,16,16h3.2c21.6,0,40,18.4,40,40.8v104c0,22.4-17.6,40.8-40,40.8H69.2V300z M92.4,183.2c-21.6,0-40,17.6-40,40
                                            s17.6,40,40,40h148.8c21.6,0,40-17.6,40-40s-17.6-40-40-40H92.4z M93.2,54.4c-21.6,0-40,17.6-40,40s17.6,40,40,40h74.4
                                            c21.6,0,40-17.6,40-40s-17.6-40-40-40H93.2z"/>
                                            <g>
                                            <path d="M183.6,94.4c0-8.8-7.2-16-16-16H93.2c-8.8,0-16,7.2-16,16s7.2,16,16,16h74.4
                                            C176.4,109.6,183.6,103.2,183.6,94.4z M167.6,62.4c17.6,0,32,14.4,32,32s-14.4,32-32,32H93.2c-17.6,0-32-14.4-32-32s14.4-32,32-32
                                            H167.6z"/>
                                            <path d="M256.4,223.2c0-8.8-7.2-16-16-16h-148c-8.8,0-16,7.2-16,16s7.2,16,16,16h148.8
                                            C249.2,238.4,256.4,231.2,256.4,223.2z M240.4,191.2c17.6,0,32,14.4,32,32s-14.4,32-32,32h-148c-17.6,0-32-14.4-32-32
                                            s14.4-32,32-32H240.4z"/>
                                            <path d="M302.8,259.2v-104c0-27.2-21.6-48.8-48-48.8h-3.2c-4,0-8-4-8-8V65.6c0-27.2-21.6-48.8-48-48.8H69.2
                                            c-26.4,0-48,21.6-48,48.8V260c0,27.2,21.6,48.8,48,48.8h185.6C281.2,308,302.8,286.4,302.8,259.2z M318.8,155.2v104
                                            c0,36-28.8,64.8-64,64.8H69.2c-35.2,0-64-28.8-64-64.8V64.8C5.2,28.8,34,0,69.2,0h127.2c35.2,0,64,28.8,64,64.8v25.6
                                            C293.2,92.8,318.8,120.8,318.8,155.2z"/>
                                            </g>
                                        </svg>
                                    </span>
                                    &nbsp;<span>Blog</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
