import React from 'react';
import Halo from '../components/Halo';
import './Services.scss';
import { services } from '../data.json';
import Service from '../components/Service';
const context = require.context('../images/services/', true);
const images = {};
context.keys().forEach((filename)=>{
    images[filename] = context(filename);
});

function Services() {
    return (
        <Halo id={'services'} rings={5} childElem={
            <ul className='inner-section'>
                <h2 className='section-head'>
				    services
                </h2>
                { services.map((service, index) => (
                    <Service
                        key={index}
                        id={'service-' + index}
                        headline={service.headline}
                        deck={service.deck}
                        src={images[service.src]}
                        />
                ))}
            </ul>
        } />
    );
}
export default Services;
