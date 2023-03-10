import React, { FunctionComponent, useEffect, useState } from 'react';

const Header:FunctionComponent = () => {
    /**
     * Storing state for when the mobile nav menu is opened.
     */
    const [openMobileNav, setOpenMobileNav] = useState(false);

    /**
     * Preventing the user from scrolling the page when the mobile nav menu is opened.
     */
    useEffect(() => {
        document.body.style.overflowY = openMobileNav ? 'hidden' : 'scroll';
    }, [openMobileNav]);

    return <header id="Header">
        <div className='Wrapper'>
            <a className='Logo' href='/'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365.92 46.21">
                    <polygon fill="#d84040" points="0 43.08 12.65 43.08 12.65 37.66 7.01 37.66 7.01 8.55 12.65 8.55 12.65 3.13 0 3.13 0 43.08"/>
                    <polygon fill="#d84040" points="120.12 8.55 125.81 8.55 125.81 37.66 120.12 37.66 120.12 43.08 132.82 43.08 132.82 3.13 120.12 3.13 120.12 8.55"/>
                    <path fill="#fff" d="m59.08,5.72c-1.37-.97-2.8-1.65-4.31-2.03-1.5-.38-2.79-.57-3.85-.57H15.02v39.95h10.04v-13.64h20.95l6.39,13.64h10.73l-6.96-14.78c.95-.38,1.89-.89,2.83-1.54.93-.65,1.77-1.45,2.51-2.43.74-.97,1.34-2.12,1.8-3.45.46-1.33.68-2.87.68-4.62,0-2.66-.48-4.84-1.43-6.53-.95-1.69-2.11-3.03-3.48-4Zm-5.71,12.78c-.38.59-.83,1.06-1.34,1.4-.51.34-1.02.58-1.51.71-.5.14-.86.2-1.09.2h-24.37v-9.07h24.37c.3,0,.71.06,1.23.17.51.11,1.02.33,1.51.66.49.32.91.78,1.26,1.37.34.59.51,1.36.51,2.31s-.19,1.67-.57,2.25Z"/>
                    <path fill="#fff" d="m118.66,37.06c.68-1.39,1.03-3.07,1.03-5.05-.04-1.14-.27-2.26-.69-3.37-.34-.95-.89-1.93-1.65-2.94-.76-1.01-1.86-1.85-3.31-2.54,1.45-.61,2.55-1.39,3.31-2.34.76-.95,1.31-1.9,1.65-2.85.42-1.1.65-2.26.69-3.48,0-2.02-.32-3.74-.97-5.17-.65-1.43-1.54-2.6-2.68-3.51-1.14-.91-2.51-1.59-4.11-2.02-1.6-.44-3.35-.66-5.25-.66h-37.44v39.95h37.44c1.83,0,3.53-.21,5.11-.63,1.58-.42,2.95-1.07,4.11-1.97,1.16-.89,2.08-2.04,2.77-3.42Zm-9.19-4.14c-.38.53-.82.93-1.31,1.2-.5.27-.98.44-1.46.51-.48.08-.83.11-1.05.11h-26.37v-7.93h26.37c.3,0,.7.04,1.2.11.49.08.98.25,1.46.51.48.27.88.67,1.23,1.2.34.53.51,1.25.51,2.17s-.19,1.58-.57,2.11Zm0-15.41c-.38.53-.82.94-1.31,1.23-.5.28-.98.47-1.46.54-.48.08-.83.11-1.05.11h-26.37v-7.93h26.37c.3,0,.7.04,1.2.11.49.08.98.24,1.46.48.48.25.88.64,1.23,1.17.34.53.51,1.26.51,2.17s-.19,1.58-.57,2.11Z"/>
                    <path fill="#fff" d="m171.62,15.72l-7.4,16.98h-3.11l-7.42-16.98h3.42l5.65,13.1,5.7-13.1h3.15Z"/>
                    <path fill="#fff" d="m180.69,15.72h3.15v16.98h-3.15V15.72Z"/>
                    <path fill="#fff" d="m199.16,18.39h-5.63v-2.67h14.41v2.67h-5.63v14.31h-3.15v-14.31Z"/>
                    <path fill="#fff" d="m227.76,28.77h-8.49l-1.67,3.93h-3.25l7.64-16.98h3.11l7.67,16.98h-3.3l-1.7-3.93Zm-1.04-2.48l-3.2-7.42-3.18,7.42h6.38Z"/>
                    <path fill="#fff" d="m242.2,15.72h3.15v14.31h8.88v2.67h-12.03V15.72Z"/>
                    <path fill="#fff" d="m277.98,15.72h3.15v16.98h-3.15V15.72Z"/>
                    <path fill="#fff" d="m296.45,18.39h-5.63v-2.67h14.41v2.67h-5.63v14.31h-3.15v-14.31Z"/>
                    <polygon fill="#fff" points="346.59 46.21 337.44 8.04 329.84 23.75 318.98 23.75 318.98 21.04 328.23 21.04 338.12 0 347.4 37.34 354.95 21.54 365.92 21.54 365.92 24.25 355.69 24.25 346.59 46.21"/>
                </svg>
            </a>
            <nav className='DesktopNav'>
                <a href='/'>Home</a>
                <a href='/services'>Services</a>
                <a href='/contact'>Contact</a>
            </nav>
            <div className='HamburgerButton' onClick={ e => {
                setOpenMobileNav(!openMobileNav);
            }}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <nav className='MobileNav' style={{
                transform: `translateX(${openMobileNav ? '0%' : '100%'})`
            }}>
                <p onClick={ e => {
                    setOpenMobileNav(!openMobileNav);
                }}>&#60;-- Back</p>
                <a href='/'>Home</a>
                <a href='/services'>Services</a>
                <a href='/contact'>Contact</a>
                <a href='/login'>Log In <i className="fa-regular fa-user"></i></a>
            </nav>
        </div>
    </header>
}

export default Header;