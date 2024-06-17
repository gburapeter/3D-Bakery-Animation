import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import { OrthographicCamera, SheetProvider } from "@theatre/r3f";
import BakeryMusic from "../src/assets/cute-bakery-music.mp3";
import "./App.css";
import { Bakery } from "./Bakery";
import demoProjectState from "./fixedv2.json";
// import extension from "@theatre/r3f/dist/extension";
// import studio from "@theatre/studio";

import { useEffect } from "react";
import Donut from "./Donut";
import { Overlay } from "./Overlay";
// if (import.meta.env.DEV) {
// 	studio.initialize();
// 	studio.extend(extension);
// }
// our Theatre.js project sheet, we'll use this later
// const demoSheet = getProject("Demo Project").sheet("Demo Sheet");
const demoSheet = getProject("Demo Project", { state: demoProjectState }).sheet(
	"Demo Sheet"
);
function App() {
	useEffect(() => {
		demoSheet.project.ready.then(() => {
			setTimeout(() => {
				demoSheet.sequence

					.attachAudio({ source: BakeryMusic })
					// this promise resolves immediately as everything is already provided
					.then(() => {
						demoSheet.sequence.play();
					});
			}, 5000);
		});
	}, []);

	return (
		<>
			<div className="h-screen grid items-start py-16 px-32 grid-cols-4 w-screen relative">
				<div className="col-span-2 text-4xl">Ghiurutan-Bura Peter</div>

				<div className="col-span-2 text-end flex flex-col space-y-8 text-3xl ">
					<div className="cursor-pointer underline underline-offset-8 ">
						Linkedin
					</div>
					<div className="cursor-pointer underline underline-offset-8 ">
						Github
					</div>
				</div>

				<div className="fixed inset-0 w-full h-full justify-center inline-flex">
					<Donut />
				</div>
			</div>
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
