import React from "react";
import "./SidelineText.css";

function SidelineText() {
	return (
		<div className="sideline-text-container">
			<div className="left-sideline-text">
				<p>
					<span className="sideline-text-mix">
						Aenean facilisis ex id enim congue, in sagit
					</span>
					tis dui maximus. In ullamcorper tincidunt est, quis placerat sem
					interdum semper
				</p>
			</div>
			<div className="right-sideline-text">
				<p>
					Aenean facilisis ex id enim congue,
					<br /> in sagittis dui maximus. In ullamcorper tincidunt est, quis
					placerat sem interdum semper
				</p>
			</div>
		</div>
	);
}

export default SidelineText;
