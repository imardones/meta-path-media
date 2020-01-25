import React, { useState, useEffect } from 'react';
import './Meshes.scss';
import Mandala from './Mandala';

function Meshes() {


const [specs, setSpecs] = useState('0 0 1300 1300');

// useEffect(() => {
//     console.log('useEffect');
//     const mandalaSVG = document.getElementById('mandala-svg');
//     var w = window.innerWidth;
//     var h = window.innerHeight;
//     var winboxSpecs = '0 0 ' + w + ' ' + h;
//     setSpecs(winboxSpecs)
//     mandalaSVG.setAttribute('viewBox', {specs});
// }, []);


    return (
        <div className='meshes'>
            {/* <img src={Mandala} className='mesh1' alt='mesh1' /> */}
        </div>
    );
}

export default Meshes;
