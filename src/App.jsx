import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Bakemgo } from "./Bakem";
import { Gogo } from "./Gogo.1";

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
				<OrbitControls />
				{/* <color args={["white"]} attach="background" /> */}
				<Gogo />
				{/* <Bakedem /> */}
			</Canvas>
		</>
	);
}

export default App;
