import React from "react";
import vector from "./Vector.png";
import "./Feature.css";

function Feature() {
	return (
		<div className="feature-container">
			<div className="feature-item">
				<h1 className="feature-text">feature</h1>
				<div className="feature-vector-container">
					<img src={vector} alt="scribble" id="feature-vector" />
				</div>
			</div>
		</div>
	);
}

export default Feature;
