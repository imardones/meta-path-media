import React from 'react';
import Halo from '../components/Halo';
import ContactForm from '../components/ContactForm';

import './Contact.scss';
// import './CharacterSelector.css';
// import { characters } from './characters.json';

function Contact() {
    return (
        <Halo id={'contact'} rings={2} childElem={
            <div className='inner-section' >

                <h2 className='section-head'>contact</h2>
                <div id='contact-form'>
                    <ContactForm />
                </div>

                <h3 className='aside-head'>general inquiry:</h3>
                <aside id='contacts'>
                    <a href='mailto:imiggie@gmail.com'>imiggie@gmail.com</a>
                </aside>
            </div>
        } />
    );
}
export default Contact;