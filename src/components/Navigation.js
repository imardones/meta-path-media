import React, { useState } from 'react';
import './Navigation.scss';
import icon_menu from '../images/icon-menu.png';

export default function Navigation() {
    
    const [navShelf, setNavShelf] = useState('collapsed not-scrolling');
    function menuToggle(event) {
        if (navShelf === 'collapsed not-scrolling') {
            setNavShelf('expanded');
            // setMandalaState('expanded');
        } else {
            setNavShelf('collapsed not-scrolling');
        }
    }

    // function homeBtn() {
    //     document.getElementsByClassName('admob-page'))[0].clientHeight +
    // }

    function scrollToSection(event) {
        event.preventDefault();
        const sectionID = event.target.href.split('#')[1];
        const sectionEle= document.getElementById(sectionID);
        menuToggle();
        if (sectionEle.offsetHeight >= window.innerHeight) { 
            sectionEle.scrollIntoView({ behavior: 'smooth', block: 'start'});
        } else {
            sectionEle.scrollIntoView({ behavior: 'smooth', block: 'center'});
        }
    }
    // sectionMap();
    return (
        <nav id='navigation' className={navShelf}>
            <ul className='nav'>
                <li className='btn_menu'>
                    <div className='breadcrumb'>
                        <a href='#home' onClick={scrollToSection}>METAPATH.MEDIA</a><br/><span id='bc-section'> </span>
                    </div>
                    <button onClick={menuToggle}>
                        <img src={icon_menu} width='20' height='20' alt='Navigation Menu' className='icon_menu' />
                        <span className='icon_close'>X</span>
                    </button>
                </li>
                {/* <li className='btn_home'><a href='#home' onClick={scrollToSection}>home</a></li> */}
                <li><a href='#services' onClick={scrollToSection}>services</a></li>
                    <ul className='sub-nav'>
                        <li><a href='#service-0' onClick={scrollToSection}>full-stack engineering</a></li>
                        <li><a href='#service-1' onClick={scrollToSection}>user experience / interface</a></li>
                        <li><a href='#service-2' onClick={scrollToSection}>multimedia production</a></li>
                        <li><a href='#service-3' onClick={scrollToSection}>information architecture</a></li>
                    </ul>
                <li><a href='#projects' onClick={scrollToSection}>projects</a></li>
                    <ul className='sub-nav'>
                        <li><a href='#portfolio-dev' onClick={scrollToSection}>developed</a></li>
                        <li><a href='#portfolio-ux' onClick={scrollToSection}>& designed</a></li>
                        <li><a href='#portfolio-sp' onClick={scrollToSection}>special projects</a></li>
                        <li><a href='#portfolio-cc' onClick={scrollToSection}>consulted</a></li>
                    </ul>
                <li><a href='#about' onClick={scrollToSection}>about</a></li>
                <li><a href='#contact' onClick={scrollToSection}>contact</a></li>
            </ul>

        </nav>
    );
}
