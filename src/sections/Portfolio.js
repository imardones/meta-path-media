import React from 'react';
import './Portfolio.scss';

function Portfolio() {
    return (
		<section id='portfolio' className='section portfolio'>
			{/* <div className='grid-layer'> */}
				<h2>portfolio</h2>
				<ul id='portfolio-dev' className='sub-section'>
					<h3>developed</h3>
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
				<ul id='portfolio-ux' className='sub-section'>
					<h3>& designed</h3>
					<li><a rel='designed_group' href='./portfolio/wpi-careersun.jpg' title='Careers.UN.org'>Careers.UN</a></li>
					<li><a rel='designed_group' href='./portfolio/wpi-unservicecatalogue.jpg' title='UNServiceCatalogue'>UNServiceCatalogue</a></li>
					<li><a rel='designed_group' href='./portfolio/wpi-christopherbollen.jpg' title='ChristopherBollen.com'>ChristopherBollen</a></li>
					<li><a rel='designed_group' href='./portfolio/wpi-geiergroup.jpg' title='GeierGroup.com'>GeierGroup</a></li>
					<li><a rel='designed_group' href='./portfolio/wpi-thesterlingmove.jpg' title='TheSterlingMove.com'>TheSterlingMove</a></li>
					<li><a rel='designed_group' href='./portfolio/wpi-myhronline.jpg' title='MyHR.UN.org'>MyHR.UN.org</a></li>
					<li><a rel='designed_group' href='./portfolio/wpi-unmisc.jpg' title='UNinspiria'>UNinspiria</a></li>
					<li><a rel='designed_group' href='./portfolio/wpi-optabeta.jpg' title='OPTA BETA'>OPTA<sup>BETA</sup></a></li>
					<li><a rel='designed_group' href='./portfolio/wpi-thearboleda.jpg' title='TheArboleda.com'>TheArboleda</a></li>
					<li><a rel='designed_group' href='./portfolio/wpi-shootemupmedia.jpg' title='ShootEmUpMedia.com'>ShootEmUpMedia</a></li>
					<li><a rel='designed_group' href='./portfolio/wpi-kulebaexchange.jpg' title='KulebaExchange.com'>KulebaExchange</a></li>
					<li><a rel='designed_group' href='./portfolio/wpi-ittakesavillage.jpg' title='OverNightChildCare.com'>OverNightChildCare</a></li>
				</ul>
				<ul id='portfolio-sp' className='sub-section'>
					<h3>special projects</h3>
					<li><a rel='special_group' href='./portfolio/wpi-intranetsites.jpg' title='Intranet Sites'>Intranet Sites</a></li>
					<li><a rel='special_group' href='./portfolio/wpi-webmastering.jpg' title='Webmastering/Publishing'>Webmastering/Publishing</a></li>
					<li><a rel='special_group' href='./portfolio/wpi-newsletters.jpg' title='Newsletter Templates'>Newsletter Templates</a></li>
					<li><a rel='special_group' href='./portfolio/wpi-webmarketing.jpg' title='Web Marketing'>Web Marketing</a></li>
					<li><a href='/sample/BMW_Pre-Launch/BMW_3_Series_Reveal.html' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='Facebook Promo'>Facebook Promo</a></li>
					<li><a rel='special_group' href='./portfolio/wpi-naascny.jpg' title='NAASC-NY.org'>NAASC-NY</a></li>
					<li><a href='http://www.fashion500.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='Fashion500.com'>Fashion500</a></li>
					<li><a href='http://www.stopsmilingonline.com/' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='StopSmilingOnline.com'>StopSmilingOnline</a></li>
					<li><a href='http://www.buefilms.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='BueFilms.com'>BueFilms</a></li>
				</ul>
				<ul id='portfolio-cc' className='sub-section'>
					<h3>consulted/collaborated</h3>
					<li><a rel='consulted_group' href='http://www.wired.com/' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='Wired.com'>Wired</a></li>
					<li><a rel='consulted_group' href='https://www.shutterstock.com/editorial' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='shutterstock.com/editorial'>ShutterStock.com/Editorial</a></li>
					<li><a rel='consulted_group' href='http://epicurious.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='Epicurious.com'>Epicurious</a></li>
					<li><a rel='consulted_group' href='http://www.style.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='Style.com'>Style.com/Vogue</a></li>
					<li><a rel='consulted_group' href='http://men.style.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='MEN.Style.com'>MEN.Style</a></li>
					<li><a rel='consulted_group' href='http://flip.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='FLIP.com'>FLIP</a></li>
					<li><a rel='consulted_group' href='./portfolio/wpi-meeproductions.jpg' title='MEEproductions.com'>MEEproductions</a></li>
					<li><a rel='consulted_group' href='./portfolio/wpi-ndigonline.jpg' title='NDigo.com'>NDigo</a></li>
					<li><a rel='consulted_group' href='http://www.allbooks4less.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='Allbooks4less.com'>Allbooks4less</a></li>
					<li><a rel='consulted_group' href='http://www.louisaguinnessgallery.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer' title='LouisaGuinnessGallery.com'>LouisaGuinnessGallery</a></li>
					<li><a href='http://www.execu-search.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer'>Execu-Search.com</a></li>
				</ul>
			{/* </div> */}
		</section>
    );
}
export default Portfolio;
