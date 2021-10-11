import bgr from "./bgr.png";
import "./App.css";
import Section from "./Section";
import IvanChebotarev from "./IvanChebotarev";

import "./font.css";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

function App() {
	return (
		<div>
			<div className="App-container">
				<Section />
				<SectionTwo />
				<SectionThree />
			</div>
		</div>
	);
}

export default App;
