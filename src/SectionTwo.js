import React from "react";
import "./font.css";
import "./Section.css";
import IvanChebotarev from "./IvanChebotarev";
import LandingImages from "./LandingImages";
import Feature from "./Feature";
import SidelineText from "./SidelineText";
import GifShowcase from "./GifShowcase";

function SectionTwo() {
	return (
		<div className="Section">
			<div className="section-container">
				<SidelineText />
				<GifShowcase />
			</div>
		</div>
	);
}

export default SectionTwo;
