import React from "react";
import "./GifShowcase.css";
import "./font.css";

function GifShowcase() {
	return (
		<div>
			<h1 className="video">videovideo</h1>
			<h1 className="video">videovideo</h1>
			<h1 className="video">videovideo</h1>
			<h1 className="video">videovideo</h1>
			<div className="gif-showcase-container">
				<div className="rectangle-container">
					<p className="rectangle-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</p>
				</div>

				<div className="gif-container">
					<img src="https://media.giphy.com/media/DIxACmS657shYrahu0/giphy.gif?cid=790b76113efa79a70fb400cdda3f4873ae7da4979dfb6c8f&rid=giphy.gif&ct=g"></img>
				</div>
			</div>
		</div>
	);
}

export default GifShowcase;
