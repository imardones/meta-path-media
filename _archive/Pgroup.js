import React from 'react';
import Project from '../components/Project';
const context = require.context('../images/portfolio/', true);
const images = {};
context.keys().forEach((filename)=>{
    images[filename] = context(filename);
});
function Pgroup({pgroup, kind, index, id, props}) {
    return (
        // { pgroup.map((group, index) => (
        	<ul id={id} className='sub-section'>
				<h3>Testing</h3> {console.dir(pgroup )}
				<li><a href='https://marketingplatform.google.com/about/' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='MarketingPlatform.Google.com'>MarketingPlatform.Google</a>&nbsp;&nbsp;&nbsp;&nbsp;</li>
				<li><a href='https://admob.google.com/home/' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='AdMob.Google.com'>AdMob.Google</a></li>
				<li><a href='https://admanager.google.com/home/' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='AdManger.Google.com'>AdManger.Google</a></li>
				<li><a href='https://games.withgoogle.com/' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='Games.withGoogle.com'>Games.withGoogle</a></li>
				<li><a href='https://www.saatchiwellness.com/' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='SaatchiWellness.com/'>Saatchi & Saatchi Wellness</a></li>
				<li><a rel='developed_group' href='./portfolio/wpi-saatchihealth.jpg' title='SaatchiHealth.com'>Saatchi Health</a></li>
				<li><a rel='developed_group' href='./portfolio/wpi-nutritiondata.jpg' title='NutritionData.com'>NutritionData</a></li>
				<li><a rel='developed_group' href='./portfolio/wpi-bizbash.jpg' title='BizBash.com'>BizBash</a></li>
				<li><a rel='developed_group' href='./portfolio/wpi-protegrity.jpg' title='Protegrity.com'>Protegrity</a></li>
				<li><a rel='developed_group' href='./portfolio/wpi-thinkcentric.jpg' title='ThinkCentric.com'>ThinkCentric</a></li>
				<li><a rel='developed_group' href='./portfolio/wpi-spusd.jpg' title='SPUSD.net'>SPUSD</a></li>
				<li><a rel='developed_group' href='./portfolio/wpi-gen.jpg' title='GEN.com'>GEN</a></li>
			</ul>
			// ))}
        );
    }
    
    export default Pgroup;
    