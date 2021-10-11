import React from "react";
import mia1 from "./mia1noise.jpg";
import mia2 from "./mia2noise.jpg";
import "./LandingImages.css";

function LandingImages() {
	return (
		<div className="landing-image-container">
			<div className="mia-image-1">
				<img src={mia1} alt=" mia" />
			</div>
			<div className="mia-image-2">
				<img src={mia2} alt=" mia 2" />
			</div>
		</div>
	);
}

export default LandingImages;
