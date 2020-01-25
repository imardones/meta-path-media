import React from 'react';
import './Portfolio.scss';

function Portfolio() {
    return (
		<section id='portfolio' className='section portfolio'>
			{/* <div className='grid-layer'> */}
				<table id='portfolio-dev' className='sub-section'>
                    <tr>
					<th>developed</th>
					<td><a href='https://marketingplatform.google.com/about/' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='MarketingPlatform.Google.com'>MarketingPlatform.Google</a>&nbsp;&nbsp;&nbsp;&nbsp;</td>
					<td><a href='https://admob.google.com/home/' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='AdMob.Google.com'>AdMob.Google</a></td>
					<td><a href='https://admanager.google.com/home/' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='AdManger.Google.com'>AdManger.Google</a></td>
					<td><a href='https://games.withgoogle.com/' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='Games.withGoogle.com'>Games.withGoogle</a></td>
					<td><a href='https://www.saatchiwellness.com/' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='SaatchiWellness.com/'>Saatchi & Saatchi Wellness</a></td>
					<td><a rel='developed_group' href='./portfolio/wpi-saatchihealth.jpg' title='SaatchiHealth.com'>Saatchi Health</a></td>
					<td><a rel='developed_group' href='./portfolio/wpi-nutritiondata.jpg' title='NutritionData.com'>NutritionData</a></td>
					<td><a rel='developed_group' href='./portfolio/wpi-bizbash.jpg' title='BizBash.com'>BizBash</a></td>
					<td><a rel='developed_group' href='./portfolio/wpi-protegrity.jpg' title='Protegrity.com'>Protegrity</a></td>
					<td><a rel='developed_group' href='./portfolio/wpi-thinkcentric.jpg' title='ThinkCentric.com'>ThinkCentric</a></td>
					<td><a rel='developed_group' href='./portfolio/wpi-spusd.jpg' title='SPUSD.net'>SPUSD</a></td>
					<td><a rel='developed_group' href='./portfolio/wpi-gen.jpg' title='GEN.com'>GEN</a></td>
                    <tr>
				</table>
				<table id='portfolio-ux' className='sub-section'>
                <tr>
					<th>& designed</th>
					<td><a rel='designed_group' href='./portfolio/wpi-careersun.jpg' title='Careers.UN.org'>Careers.UN</a></td>
					<td><a rel='designed_group' href='./portfolio/wpi-unservicecatalogue.jpg' title='UNServiceCatalogue'>UNServiceCatalogue</a></td>
					<td><a rel='designed_group' href='./portfolio/wpi-christopherbollen.jpg' title='ChristopherBollen.com'>ChristopherBollen</a></td>
					<td><a rel='designed_group' href='./portfolio/wpi-geiergroup.jpg' title='GeierGroup.com'>GeierGroup</a></td>
					<td><a rel='designed_group' href='./portfolio/wpi-thesterlingmove.jpg' title='TheSterlingMove.com'>TheSterlingMove</a></td>
					<td><a rel='designed_group' href='./portfolio/wpi-myhronline.jpg' title='MyHR.UN.org'>MyHR.UN.org</a></td>
					<td><a rel='designed_group' href='./portfolio/wpi-unmisc.jpg' title='UNinspiria'>UNinspiria</a></td>
					<td><a rel='designed_group' href='./portfolio/wpi-optabeta.jpg' title='OPTA BETA'>OPTA<sup>BETA</sup></a></td>
					<td><a rel='designed_group' href='./portfolio/wpi-thearboleda.jpg' title='TheArboleda.com'>TheArboleda</a></td>
					<td><a rel='designed_group' href='./portfolio/wpi-shootemupmedia.jpg' title='ShootEmUpMedia.com'>ShootEmUpMedia</a></td>
					<td><a rel='designed_group' href='./portfolio/wpi-kulebaexchange.jpg' title='KulebaExchange.com'>KulebaExchange</a></td>
					<td><a rel='designed_group' href='./portfolio/wpi-ittakesavillage.jpg' title='OverNightChildCare.com'>OverNightChildCare</a></td>
                    <tr>
				</table>
				<table id='portfolio-sp' className='sub-section'>
                <tr>
					<th>special projects</th>
					<td><a rel='special_group' href='./portfolio/wpi-intranetsites.jpg' title='Intranet Sites'>Intranet Sites</a></td>
					<td><a rel='special_group' href='./portfolio/wpi-webmastering.jpg' title='Webmastering/Publishing'>Webmastering/Publishing</a></td>
					<td><a rel='special_group' href='./portfolio/wpi-newsletters.jpg' title='Newsletter Templates'>Newsletter Templates</a></td>
					<td><a rel='special_group' href='./portfolio/wpi-webmarketing.jpg' title='Web Marketing'>Web Marketing</a></td>
					<td><a href='/sample/BMW_Pre-Launch/BMW_3_Series_Reveal.html' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='Facebook Promo'>Facebook Promo</a></td>
					<td><a rel='special_group' href='./portfolio/wpi-naascny.jpg' title='NAASC-NY.org'>NAASC-NY</a></td>
					<td><a href='http://www.fashion500.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='Fashion500.com'>Fashion500</a></td>
					<td><a href='http://www.stopsmilingonline.com/' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='StopSmilingOnline.com'>StopSmilingOnline</a></td>
					<td><a href='http://www.buefilms.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='BueFilms.com'>BueFilms</a></td>
                    <tr>
				</table>
				<table id='portfolio-cc' className='sub-section'>
                    <tr>
                        <th>consulted/collaborated</th>
                        <td><a rel='consulted_group' href='http://www.wired.com/' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='Wired.com'>Wired</a></td>
                        <td><a rel='consulted_group' href='https://www.shutterstock.com/editorial' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='shutterstock.com/editorial'>ShutterStock.com/Editorial</a></td>
                        <td><a rel='consulted_group' href='http://epicurious.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='Epicurious.com'>Epicurious</a></td>
                        <td><a rel='consulted_group' href='http://www.style.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='Style.com'>Style.com/Vogue</a></td>
                        <td><a rel='consulted_group' href='http://men.style.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='MEN.Style.com'>MEN.Style</a></td>
                        <td><a rel='consulted_group' href='http://flip.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='FLIP.com'>FLIP</a></td>
                        <td><a rel='consulted_group' href='./portfolio/wpi-meeproductions.jpg' title='MEEproductions.com'>MEEproductions</a></td>
                        <td><a rel='consulted_group' href='./portfolio/wpi-ndigonline.jpg' title='NDigo.com'>NDigo</a></td>
                        <td><a rel='consulted_group' href='http://www.allbooks4less.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='Allbooks4less.com'>Allbooks4less</a></td>
                        <td><a rel='consulted_group' href='http://www.louisaguinnessgallery.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" title='LouisaGuinnessGallery.com'>LouisaGuinnessGallery</a></td>
                        <td><a href='http://www.execu-search.com' target='_blank' onClick="window.open(this.href,'','width=1100, height=700, resizeable=yes,menubar=yes,scrollbars=yes'); return false" rel='noopener noreferrer'>Execu-Search.com</a></td>
                    </tr>
				</table>
			{/* </div> */}
		</section>
    );
}
export default Portfolio;
