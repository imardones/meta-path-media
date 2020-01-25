import React, { useState, useEffect } from "react";
import Mandala from "../components/mandala";
// import "./CharacterSelector.css";
// import { characters } from './characters.json';

function Home() {
    return (
			<section id="home" className='section'>
				<div id="LOGO">
					<div id="MPM_TITLE">MetaPath.media</div>
					<div id="SLOGAN">web development &amp; interactive design</div>
					<div id="egg">
						<Mandala></Mandala>
						<object id="FlashID" classID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="275" height="200">
							<param name="movie" value="../images/egg.swf" />
							<param name="quality" value="high" />
							<param name="wmode" value="opaque" />
							<param name="swfversion" value="7.0.70.0" />
							{/* <!-- This param tag prompts users with Flash Player 6.0 r65 and higher to download the latest version of Flash Player. Delete it if you don't want users to see the prompt. --> */}
							<param name="expressinstall" value="Scripts/expressInstall.swf" />
							{/* <!-- Next object tag is for non-IE browsers. So hide it from IE using IECC. -->
							<!--[if !IE]>--> */}
							<object type="application/x-shockwave-flash" data="../images/MPM_EGG.swf" width="275" height="200">
							{/* <!--<![endif]--> */}
							<param name="quality" value="high" />
							<param name="wmode" value="opaque" />
							<param name="swfversion" value="7.0.70.0" />
							<param name="expressinstall" value="Scripts/expressInstall.swf" />
							{/* <!-- The browser displays the following alternative content for users with Flash Player 6.0 and older. --> */}
							<div></div>{/* <img src="./images/MPM2.gif" alt="egg" /></div> */}
							{/* <!--[if !IE]>--> */}
							</object>
							{/* <!--<![endif]--> */}
						</object>
					</div>
				</div>
				<quote id="quote">WELCOMING A NEW AGE OF DIGITAL METAPHYSICS. <div>Re-imagining the possible through a sensible fusion of concept, design and technology.</div></quote>
			</section>   
    );
}
export default Home;