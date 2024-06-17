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

	const todaysDate = new Date().toLocaleString();

	return (
		<>
			<div className="h-screen grid items-start py-16 px-32 grid-cols-4 w-screen relative">
				<div className="col-span-2 text-4xl">Ghiurutan-Bura Peter</div>

				<div className="col-span-2 text-end flex flex-col space-y-8 text-3xl ">
					<div>
						<a
							target="_blank"
							className="w-full relative group cursor-pointer hover:text-gray-700  "
						>
							Linkedin
							<span className="absolute -bottom-1 right-0 w-full h-[0.15rem] bg-black transition-all group-hover:w-0"></span>
						</a>
					</div>
					<div>
						<a
							target="_blank"
							className="w-full relative group cursor-pointer hover:text-gray-700  "
						>
							Github
							<span className="absolute -bottom-1 right-0 w-full h-[0.15rem] bg-black transition-all group-hover:w-0"></span>
						</a>
					</div>
				</div>

				<div className="  col-span-2 text-2xl inline-flex h-full items-end text-start">
					<a
						target="_blank"
						className=""
						href="https://www.freepik.com/free-vector/hand-drawn-plain-donut_16263485.htm#query=donut%20svg&position=0&from_view=keyword&track=ais_user&uuid=997c96f7-11bd-4a70-8bea-4ec6211fe314"
					>
						SVG by{" "}
						<span className="italic text-slate-900">rawpixel.com</span>
					</a>
				</div>

				<div className=" h-full col-start-4 text-end inline-flex items-end justify-end w-full text-3xl ">
					{todaysDate}
				</div>

				<div className="fixed inset-0 w-full h-full justify-center inline-flex -z-10">
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
