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
import { SheetProvider } from "@theatre/r3f";

studio.initialize();
studio.extend(extension);
// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject("Demo Project").sheet("Demo Sheet");
function App() {
	// useEffect(() => {
	// 	demoSheet.project.ready.then(() =>
	// 		demoSheet.sequence.play({ iterationCount: 1, range: [0, 4.36] })
	// 	);
	// }, []);
	return (
		<>
			<Canvas
				flat
				orthographic
				camera={{
					position: [0, 3, 10],
					zoom: 110,
				}}
			>
				<SheetProvider sheet={demoSheet}>
					{/* <PresentationControls
					snap
					global
					zoom={0.8}
					rotation={[0, -Math.PI / 4, 0]}
					polar={[0, Math.PI / 4]}
					azimuth={[-Math.PI / 4, Math.PI / 4]}
				> */}
					{/* <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} /> */}
					<OrbitControls />
					<Bakery />
				</SheetProvider>
				{/* </PresentationControls> */}
			</Canvas>
		</>
	);
}

export default App;
