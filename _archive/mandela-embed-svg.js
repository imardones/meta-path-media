import React, { useState, useEffect } from "react";
import './mandala.scss';
// import bnet from '../assets/bnet.svg';

function Mandala() {


const [specs, setSpecs] = useState("0 0 1300 1300");

// useEffect(() => {
//     console.log("useEffect");
//     const mandalaSVG = document.getElementById('mandala-svg');
//     var w = window.innerWidth;
//     var h = window.innerHeight;
//     var winboxSpecs = "0 0 " + w + " " + h;
//     setSpecs(winboxSpecs)
//     mandalaSVG.setAttribute("viewBox", {specs});
// }, []);


    return (
        <div className="mandala" >


        <svg id="mandala-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" 
        x="0" y="0" viewBox={specs} >
        <style type="text/css">

        </style>
        <defs>
            <pattern id="netpattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse" >
                <path class="a" d="M5,0A5,5,0,0,1,0,5" />
                <path class="a" d="M10,5A5,5,0,0,1,5,0" />
                <path class="a" d="M0,5a5,5,0,0,1,5.1,5" />
                <path class="a" d="M5,10a5,5,0,0,1,5-5" />
                <circle class="b" cx="5.15" cy="5.15" r="5"/>
            </pattern>

            <g id="bnet" >
                <rect id="layer-a" x="100%" y="100%" width="100%" height="100%" fill="#netpattern" />
                <rect id="layer-b" x="100%" y="100%" width="100%" height="100%" fill="#netpattern" />
                <rect id="layer-c" x="100%" y="100%" width="100%" height="100%" fill="#netpattern" />
            </g>
            {/* <rect id="layer-mask" x="15%" y="15%" width="100" height="100" fill="url(#netpattern)" />
            <rect id="layer-mask" x="15%" y="15%" width="100" height="100" fill="url(#netpattern)" />
            <rect id="layer-mask2" x="50" y="50" width="100%" height="100%" fill="url(#netpattern)" /> */}
        </defs>
        
            
            {/* <use class="a" xlink:href='#layer-a'/>
            <use class="b" xlink:href='#layer-b'/>
            <use class="c" xlink:href='#layer-c'/> */}

        
    </svg>












        {/* <svg viewBox="0 0 16 16" className="mandala">
      <path d="M13.754 9.776c-.485 1.281-1.378 2.27-2.658 2.794V9.776l1.533-1.378-1.534-1.358V5.118c1.397-.097 2.367-1.126 2.367-2.387 0-1.649-1.572-2.232-2.464-2.232-.194 0-.408 0-.718.078v.078c.116 0 .291-.019.349-.019.621 0 1.087.291 1.087.854 0 .427-.349.854-.97.854-1.533 0-3.338-1.242-5.298-1.242-1.746 0-2.95 1.3-2.95 2.62 0 1.3.757 1.727 1.552 2.018l.02-.078c-.252-.156-.426-.427-.426-.854 0-.582.543-1.067 1.223-1.067 1.649 0 4.308 1.378 5.957 1.378h.155V7.06L9.446 8.398l1.533 1.378v2.833c-.64.233-1.3.33-1.979.33-2.561 0-4.191-1.553-4.191-4.133 0-.621.078-1.223.252-1.805l1.281-.563v5.705l2.6-1.145V5.157L5.118 6.865c.388-1.125 1.184-1.94 2.135-2.406L7.234 4.4c-2.562.563-5.046 2.504-5.046 5.414 0 3.357 2.833 5.686 6.132 5.686 3.493 0 5.472-2.329 5.492-5.724h-.058z"/>
    </svg>   */}
        </div>
    );
}

export default Mandala;
