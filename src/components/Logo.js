import React from 'react';
import './Logo.scss';

export default function Logo() {
    return (
        <a href='#home' id='btn_home'>
            <div className='logo sub-section'>
                <h1 className='header'>MetaPath.media</h1>
                <h1 className='header2'>MetaPath.media</h1>
                <div className='sub-header'>percolating interactivities & metadata</div>
            </div>
        </a>
    );
}
