import React from 'react';
import './Header.scss';
// import './Halo.scss';
import Logo from './Logo';
import Navigation from './Navigation'
import Halo from './Halo';

export default function Header() {
    return (
        <Halo id={'nav'} rings={4} childElem={
            <Navigation />
        } />
    );
}









// import React, { useState } from 'react';
// import './Header.scss';
// import icon_menu from '../images/icon-menu.png';
// import Halo from './Halo';
// // import Logo from './Logo';
// // function offset(el) {
// //     var rect = el.getBoundingClientRect(),
// //     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// //     scrollTop = window.pageYOffset || document.documentElement.scrollTop;

// //     window.scroll({
// //         top: 2500, 
// //         left: 0, 
// //         behavior: 'smooth'
// //       });
      
// //       // Scroll certain amounts from current position 
// //       window.scrollBy({ 
// //         top: 100, // could be negative value
// //         left: 0, 
// //         behavior: 'smooth' 
// //       });
      
// //       // Scroll to a certain element
// //       document.querySelector('.portfolio').scrollIntoView({ 
// //         behavior: 'smooth' 
// //       });

// //     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// // }

// // const handleClick(event) {

// //     event.preventDefault();
// //     var targetID = event.target.name;
// //     // console.log(event);
// //     // console.log(event.target);
// //     // console.log(event.target.name);
// //     // console.log();
// //     const elmnt = document.getElementById(targetID);
// //     offset(elmnt);

// //     console.log(elmnt);

//     // var div = document.querySelector('div');
//     // var divOffset = offset(div);
//     // console.log(divOffset.left, divOffset.top);

//     // elmnt.scrollIntoView();
// //     return (

// //     );
// // }
// // export default handleClick;



// // example use

// // export default Header;
//         // window.location.hash   
//     // element.scrollIntoView()

// // function sectionMap() {
// //     const offHome = document.getElementById('about').clientHeight;
// //     const homeBtn = document.getElementsByClassName('btn_home')[0];
    
// //     document.addEventListener('scroll', (evt) => {
// //         if (window.screenY >= offHome - 200) {
// //             homeBtn.classList.add('hide');
// //         } else {homeBtn.classList.remove('show');}
// //         }, { capture: false, passive: true})
// //     }

// export default function Header() {
//     const [navShelf, setNavShelf] = useState('collapsed not-scrolling');

//     function menuToggle(event) {
//         if (navShelf === 'collapsed not-scrolling') {
//             setNavShelf('expanded');
//         } else {
//             setNavShelf('collapsed not-scrolling');
//         }
//     }

//     // function homeBtn() {
//     //     document.getElementsByClassName('admob-page'))[0].clientHeight +
//     // }

//     function scrollToSection(event) {
//         event.preventDefault();
//         const sectionID = event.target.href.split('#')[1];
//         const sectionEle= document.getElementById(sectionID);
//         menuToggle();
//         if (sectionEle.offsetHeight >= window.innerHeight) { 
//             sectionEle.scrollIntoView({behavior: 'smooth', block: 'start'});
//         } else {
//             sectionEle.scrollIntoView({behavior: 'smooth', block: 'center'});
//         }
//     }
//     // sectionMap();
//     return (
//     <header>
//     <nav id='MainNav' className={navShelf}>
//         <Halo>

//         </Halo>
//             <ul className='nav'>
                
//                 <li className='btn_menu'>
//                     <div className='breadcrumb'>
//                         <a href='#home' onClick={scrollToSection}>METAPATH.MEDIA</a><br/><span id='bc-section'> </span>
//                     </div>
//                     <button onClick={menuToggle}>
//                         <img src={icon_menu} width='20' height='20' alt='Navigation Menu' className='icon_menu' />
//                         <span className='icon_close'>X</span>
//                     </button>
//                 </li>
//                 <li className='btn_home'><a href='#home' onClick={scrollToSection}>home</a></li>
//                 <li><a href='#services' onClick={scrollToSection}>services</a></li>
//                     <ul className='sub-nav'>
//                         <li><a href='#service-0' onClick={scrollToSection}>full-stack engineering</a></li>
//                         <li><a href='#service-1' onClick={scrollToSection}>user experience / interface</a></li>
//                         <li><a href='#service-2' onClick={scrollToSection}>multimedia production</a></li>
//                         <li><a href='#service-3' onClick={scrollToSection}>information architecture</a></li>
//                     </ul>
//                 <li><a href='#projects' onClick={scrollToSection}>projects</a></li>
//                     <ul className='sub-nav'>
//                         <li><a href='#portfolio-dev' onClick={scrollToSection}>developed</a></li>
//                         <li><a href='#portfolio-ux' onClick={scrollToSection}>& designed</a></li>
//                         <li><a href='#portfolio-sp' onClick={scrollToSection}>special projects</a></li>
//                         <li><a href='#portfolio-cc' onClick={scrollToSection}>consulted</a></li>
//                     </ul>
//                 <li><a href='#about' onClick={scrollToSection}>about</a></li>
//                 <li><a href='#contact' onClick={scrollToSection}>contact</a></li>
//             </ul>
//             {/* <div id='indicator'>.</div> */}
//         </nav>
//     </header>
//     );
// }
