import React from 'react';
import Halo from '../components/Halo';
import './Home.scss';

function Home() {
	return (
        <Halo id={'home'} rings={0} childElem={
            <div className='inner-section' >

				<a href='#home' id='logo' className='logo subsection'>
					<h1 className='header'>MetaPath.Media</h1>
					<div className='sub-header'>percolating interactivities & metadata</div>
				</a>

				<Halo id={'quote'} rings={6} cssClass={'framedquote'} childElem={
					<quote className='subsection halo'>
						<h3>WELCOME A NEW AGE OF<br/> DIGITAL METAPHYSICS.</h3>
						<p>Orchestrating the possible <br/>through an intrepid fusion of <br/>concept, design and technology.</p>
					</quote>
				} />

            </div>
        } />

    );
}

export default Home;