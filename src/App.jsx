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

import { motion } from "framer-motion";
import { useState } from "react";
import Back from "./CustomButtons/Back";
import Replay from "./CustomButtons/Replay";
import { Overview } from "./Overview";

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
	const [showCanvas, setShowCanvas] = useState(false);
	const [showReplayButton, setReplayButton] = useState(false);

	const handleStart = () => {
		setShowCanvas(true);
		demoSheet.project.ready.then(() => {
			setTimeout(() => {
				demoSheet.sequence

					.attachAudio({ source: BakeryMusic })
					// this promise resolves immediately as everything is already provided
					.then(() => {
						demoSheet.sequence
							.play({ range: [0, 12.5], rate: 1.25 })
							.then(() => setReplayButton(true));
					});
			}, 1100);
		});
	};

	const handleReplay = () => {
		setReplayButton(false);
		demoSheet.sequence
			.play({ range: [0, 12.5], rate: 1.25 })
			.then(() => setReplayButton(true));
	};

	const handleBack = () => {
		setShowCanvas(false);
		setReplayButton(false);
		setIsFirstRender(true);
		demoSheet.sequence.play({ range: [0, 12.5] });
		demoSheet.sequence.pause();
	};

	const [notFirstRender, setIsFirstRender] = useState(false);

	return (
		<>
			{!showCanvas && <Overview handleStart={handleStart} />}
			{showCanvas && (
				<motion.div
					initial={{ scaleX: 1, opacity: 1 }}
					animate={{
						scaleX: 0,
						opacity: 0.5,
						transition: {
							duration: 1.5,
							ease: [0.87, 0, 0.13, 1],
						},
					}}
					exit={{
						scaleX: 1,
						transition: {
							duration: 1.5,
							ease: [0.87, 0, 0.13, 1],
						},
					}}
					style={{ originX: showCanvas ? 0 : 1 }}
					className="privacy-screen"
				/>
			)}
			{!showCanvas && notFirstRender && (
				<motion.div
					initial={{ scaleX: 1, opacity: 1 }}
					animate={{
						scaleX: 0,
						opacity: 0.5,
						transition: {
							duration: 1.5,
							ease: [0.87, 0, 0.13, 1],
						},
					}}
					exit={{
						scaleX: 1,
						transition: {
							duration: 1.5,
							ease: [0.87, 0, 0.13, 1],
						},
					}}
					style={{ originX: showCanvas ? 1 : 0 }}
					className="privacy-screen"
				/>
			)}
			{showReplayButton && showCanvas && (
				<>
					<div className="fixed left-0 sm:left-20 z-50 w-full sm:top-10  ">
						<motion.button
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: {
									duration: 0.7,
									ease: "circInOut",
								},
							}}
							className=""
							onClick={handleBack}
						>
							<Back />
							{/* <Replay /> */}
						</motion.button>
					</div>
					<div className="fixed right-0 sm:right-20 z-50 sm:top-10  ">
						<motion.button
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: {
									duration: 0.7,
									ease: "circInOut",
								},
							}}
							className=""
							onClick={handleReplay}
						>
							<Replay />
							{/* <Replay /> */}
						</motion.button>
					</div>
				</>
			)}

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
