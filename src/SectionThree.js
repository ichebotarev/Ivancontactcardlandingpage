import React from "react";
import "./Section.css";
import "./SectionThree.css";
import ivanVid from "./vid.mp4";

function SectionThree() {
	return (
		<div>
			<div className="Section">
				<div className="section-container">
					<div className="video-container">
						<video autoPlay muted className="video-player" id="video-one">
							<source src={ivanVid} type="video/mp4"></source>
						</video>
						<video autoPlay muted className="video-player">
							<source src={ivanVid} type="video/mp4"></source>
						</video>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SectionThree;
