import React from "react";
import "./font.css";
import "./Section.css";
import IvanChebotarev from "./IvanChebotarev";
import LandingImages from "./LandingImages";
import Feature from "./Feature";
function Section() {
	return (
		<div className="Section">
			<div className="Section-container">
				<span className="landing-image-section">
					<LandingImages />
					<span className="feature">
						<Feature />
					</span>
				</span>

				<span className="ivan-namecard-section">
					<IvanChebotarev />
				</span>
			</div>
		</div>
	);
}

export default Section;
