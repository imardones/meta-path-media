import React from 'react';
import './Project.scss';

const modalOpen = (e) => {

}

function Project({ id, headline, deck, live_site, source_code, src, style }) {

    return (
        <li id={id} className='project' >
            <button className='btn' onClick='modalOpen' style={{ backgroundImage: `url(${src})`}}>
                {headline}
            </button>
        </li>
    );
}

export default Project;

