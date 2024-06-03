import {
	CameraControls,
	OrbitControls,
	PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Bakery } from "./Bakery";
import { getProject } from "@theatre/core";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { OrthographicCamera, SheetProvider } from "@theatre/r3f";
import demoProjectState from "./getstate.json";

import { useEffect } from "react";
studio.initialize();
studio.extend(extension);
// our Theatre.js project sheet, we'll use this later
// const demoSheet = getProject("Demo Project").sheet("Demo Sheet");
const demoSheet = getProject("Demo Project", { state: demoProjectState }).sheet(
	"Demo Sheet"
);
console.log(demoSheet);
function App() {
	// useEffect(() => {
	// 	demoSheet.project.ready.then(() =>
	// 		demoSheet.sequence.play({ iterationCount: 1, range: [0, 4.36] })
	// 	);

	// }, []);

	return (
		<>
			<Canvas flat>
				<SheetProvider sheet={demoSheet}>
					<OrthographicCamera
						theatreKey="camera"
						makeDefault
						position={[16.29, 12.09, 17.06]}
						zoom={110}
					/>
					{/* <PresentationControls
						snap
						global
						zoom={0.8}
						rotation={[0, -Math.PI / 4, 0]}
						polar={[0, Math.PI / 4]}
						azimuth={[-Math.PI / 4, Math.PI / 4]}
					> */}
					{/* <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} /> */}
					<OrbitControls
						enableZoom={false}
						enablePan={false}
						// maxPolarAngle={Math.PI / 4}
						// minPolarAngle={0}
						maxAzimuthAngle={Math.PI / 2}
						minAzimuthAngle={-Math.PI / 4}
					/>
					<Bakery />
					{/* </PresentationControls> */}
				</SheetProvider>
			</Canvas>
		</>
	);
}

export default App;
