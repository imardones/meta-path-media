import React from 'react';
import './Service.scss';

function Service({ id, headline, deck, src }) {

    return (
        <li id={id} className='service sub-section'>
            <div className='service_icon'>
                <img src={src}
                 alt='code icon' /></div>
            <div>
                <h3>{headline}</h3>
                <p>{deck}</p>
            </div>
        </li>
    );
}

export default Service;
