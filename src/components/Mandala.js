import React, { useContext } from 'react';
import './Mandala.scss';
import ThemeContext from '../App';


function Mandala() {
    const theme = useContext(ThemeContext);
    const vbMaxSq = (window.innerWidth >= window.innerHeight) ? window.innerWidth : window.innerHeight;
    const vbFactor = vbMaxSq * 1;
    const viewBox = '0 0 ' + vbFactor + ' ' + vbFactor;

    return (
        <svg className='mandala' version='1.9' width={vbMaxSq} height={vbMaxSq}
            xmlns='http://www.w3.org/2000/svg' id='mandala' x='0' y='0' xmlspace='preserve' viewBox={viewBox} style={ theme }>

            <defs>

                <pattern id='netpattern' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse' patternContentUnits="userSpaceOnUse" >
                    <path className='low' d='M5,0A5,5,0,0,1,0,5' filter='url(#microBlury)' />
                    <path className='mid' d='M10,5A5,5,0,0,1,5,0' filter='url(#microBlury)' />
                    <path className='mid' d='M0,5a5,5,0,0,1,5,5' filter='url(#microBlury)' />
                    <path className='mid' d='M5,10a5,5,0,0,1,5-5' filter='url(#microBlury)' />
                    <circle className='hi' cx='5' cy='5' r='5' filter='url(#microBlury)' />
                </pattern>

                <filter id='turbo'>
                    <feTurbulence 
                        type='turbulence' 
                        baseFrequency='3' 
                        numOctaves='4' 
                        result='turbulence' />
                </filter>

                <filter id='macroBlury'>
                    <feGaussianBlur in='SourceGraphic' stdDeviation='.2' />
                </filter>

                <filter id='microBlury'>
                    <feGaussianBlur in='SourceGraphic' stdDeviation='.9' />
                </filter>

                <rect id='mesh1' x='0' y='0' width={vbMaxSq * 3 } height={vbMaxSq  * 3 } fill='url(#netpattern)' />
                <rect id='mesh2' x='2.5' y='2.5' width={vbMaxSq * 3 } height={vbMaxSq  * 3 } fill='url(#netpattern)' />
                <circle id='mesh3' cx='50' cy='50' r={vbMaxSq * 3 } fill='url(#netpattern)'  />
            
            </defs>

            <g id='mandala' width={vbMaxSq  * 3 } height={vbMaxSq  * 3 } >
                <use className='mesh-1' xlinkHref={`#mesh1`}/>
                <use className='mesh-2' xlinkHref={`#mesh2`}/>
                <use className='mesh-3' xlinkHref={`#mesh3`}/>
            </g>

        </svg>
    );
}

export default Mandala;
