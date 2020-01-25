import React from 'react';
import './mandala.scss';

function Mandala() {

    const viewBox = '0 0 ' + window.innerWidth + ' ' + window.innerWidth
    return (
    <svg className="mandala" version="1.1" xmlns="http://www.w3.org/2000/svg" id="mandala"
        x="0" y="0" xmlspace="preserve"  viewBox={viewBox} width="1rem">

        <defs>

            <pattern id="netpattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse" >
                <path className="low" d="M5,0A5,5,0,0,1,0,5"  filter="url(#microBlury)" />
                <path className="mid" d="M10,5A5,5,0,0,1,5,0"  filter="url(#microBlury)" />
                <path className="mid" d="M0,5a5,5,0,0,1,5,5"  filter="url(#microBlury)" />
                <path className="mid" d="M5,10a5,5,0,0,1,5-5" filter="url(#microBlury)" />
                <circle className="hi" cx="5" cy="5" r="5"  filter="url(#microBlury)" />
            </pattern>

            <filter id="turbo">
                <feTurbulence 
                    type="turbulence" 
                    baseFrequency="3" 
                    numOctaves="4" 
                    result="turbulence" />
            </filter>

            <filter id="microBlury">
                <feGaussianBlur in="SourceGraphic" stdDeviation=".8" />
            </filter>

            <filter id="macroBlury">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>

            <filter id="rasterize">
                <feImage xlinkHref={`#bnet`}/>
            </filter>

            <rect id="mesh1" x="0" y="0" width="100%" height="100%" fill="url(#netpattern)" filter="url(#microBlury)" />
            <rect id="mesh2" x="0" y="0" width="100%" height="100%" fill="url(#spotlight)" />
            <circle id="mesh3" cx="50" cy="50" r="100%" fill="url(#netpattern)"  />


            <linearGradient id="spotlight" gradientTransform="rotate(310)">
                <stop offset="-10%" stop-color="#333" />
                <stop offset="90%" stop-color="white" />
            </linearGradient>

            <g id="bnet" >
                <use className="mesh-1" xlinkHref={`#mesh1`} />
                <use className="mesh-2" xlinkHref={`#mesh2`}/>
                <use className="mesh-3" xlinkHref={`#mesh3`}/>
            </g>
            <g id="bnet2" >
                <use className="mesh-" xlinkHref={`#bnet`} filter="url(#rasterize)" />
            </g>
        </defs>

        <rect x="10%" y="10%" width="80%" height="80%" fill={`url(#bnet);`} />

            <feImage className="mesh-" x="0" y="0" width="100%" height="100%" filter={`url(#bnet);`} />

            <use className="mesh-" xlinkHref={`#bnet2`}/>

    </svg>
    );
}

export default Mandala;


// "0 0 {`innerWidth`} {`innerHeight`}">