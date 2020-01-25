import React from 'react';
import { FaFilePdf, FaLinkedin, FaGithubSquare, FaLowVision } from 'react-icons/fa';
import Halo from '../components/Halo';
import './About.scss';
const resumePath = '../static/media/Ignacio_Mardones_RESUME.pdf';

function About() {
    return (
        <Halo id={'about'} rings={4} childElem={
            <div className='inner-section'>

				<h2 className='section-head'>about</h2>
                <div id='bio' className='subsection'>
                    <p>Ignacio Mardones has 15+ years experience as a IT consultant for New York organizations that include the United Nations, Condé Nast and most recently Saatchi & Saatchi. As an independent contractor he offers dependable and versatile support in the areas of full-stack development, information architecture, user experience and interface design.</p>
                    <p>In 2004 he completed an MFA in Art and Technology studies at The School of the Art Institute of Chicago where he acquired a highly specialized sense of the aesthetics and practices in emerging trends and technologies.</p>
                </div>

                <h3 className='aside-head'>more</h3>
                <aside id='more' className='subsection'>    
                    <ul>
                        <li><a href={resumePath} title='download pdf'><FaFilePdf /> RESUME.pdf</a></li>
                        <li><a href='https://www.linkedin.com/in/imardones/' rel='noreferrer noopener' target='_blank' title='LinkedIn'><FaLinkedin /> LinkedIn</a></li>
                        <li><a href='https://github.com/imardones' rel='noreferrer noopener' target='_blank' title='GitHub'><FaGithubSquare /> GitHub</a></li>
                        <li><a href='https://en.wikipedia.org/wiki/Moir%C3%A9_pattern' rel='noreferrer noopener' target='_blank' title='Moire Effect'><FaLowVision /> The Moiré Effect</a></li>
                    </ul>
                </aside>
                
            </div>
        } />

    );
}
export default About;