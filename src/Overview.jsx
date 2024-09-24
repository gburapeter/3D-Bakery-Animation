import { motion } from "framer-motion";
import React from "react";
import "./App.css";
import Arrow from "./CustomButtons/Arrow";
import Donut from "./Donut";

export const Overview = ({ handleStart }) => {
	const todaysDate = new Date().toLocaleString();
	return (
		<div className="h-screen grid items-start py-16 px-6 lg:px-16 xl:px-32 2xl:px-48 grid-cols-4 w-screen relative">
			<div className="col-span-2 text-4xl lg:text-5xl 2xl:text-6xl">
				<motion.h1
					key="hello"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: "easeInOut" }}
				>
					Bakery Animation
				</motion.h1>
			</div>

			<div className="col-span-2 text-end flex flex-col space-y-4 lg:space-y-5 text-xl lg:text-2xl xl:text-3xl z-50">
				<motion.div
					key="linkedin"
					initial={{ opacity: 0, y: 10 }} // Start from the right side of the screen
					animate={{ opacity: 1, y: 0 }} // Slide to the original position
					transition={{ duration: 1, ease: "easeInOut", delay: 0.9 }}
				>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/p%C3%A9ter-ghiurutan-bura-2765a41a2/"
						className="w-full relative group cursor-pointer hover:text-gray-700  "
					>
						Linkedin
						<span className="absolute -bottom-1 right-0 w-full h-[0.15rem] bg-black transition-all group-hover:w-0"></span>
					</a>
				</motion.div>
				<motion.div
					key="github"
					initial={{ opacity: 0, y: 10 }} // Start from the right side of the screen
					animate={{ opacity: 1, y: 0 }} // Slide to the original position
					transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
				>
					<a
						target="_blank"
						href="https://github.com/gburapeter"
						className="w-full relative group cursor-pointer hover:text-gray-700  "
					>
						Github
						<span className="absolute -bottom-1 right-0 w-full h-[0.15rem] bg-black transition-all group-hover:w-0"></span>
					</a>
				</motion.div>
			</div>

			<motion.div
				key="music"
				initial={{ opacity: 0, scale: 0, x: -300, y: 300 }} // Start from the right side of the screen
				animate={{ opacity: 1, scale: 1, x: 0, y: 0 }} // Slide to the original position
				transition={{ duration: 1.5, ease: "circOut" }}
				className=" z-50 col-span-2 text-lg inline-flex h-full items-end text-start"
			>
				<a
					target="_blank"
					className="hover:font-bold"
					href="https://www.youtube.com/watch?v=HKEmaPj935M&ab_channel=DubFX"
				>
					click for awesome music
				</a>
			</motion.div>

			<motion.div
				key="date"
				initial={{ opacity: 0, scale: 0, x: -300, y: 300 }} // Start from the right side of the screen
				animate={{ opacity: 1, scale: 1, x: 0, y: 0 }} // Slide to the original position
				transition={{ duration: 1.5, ease: "circOut", delay: 1.1 }}
				className=" h-full col-start-4 text-end inline-flex items-end justify-end w-full text-xl xl:text-2xl "
			>
				{todaysDate}
			</motion.div>

			<div className="fixed inset-0 w-full h-full items-center  justify-center inline-flex ">
				<Donut />
			</div>

			<div className="fixed bottom-20 justify-center lg:bottom-0 w-full lg:w-fit lg:right-10 lg:h-full inline-flex lg:items-center  ">
				<motion.button
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							duration: 1,
							ease: "circInOut",
							delay: 3.1,
						},
					}}
					className=""
					onClick={handleStart}
				>
					<Arrow />
					{/* <Replay /> */}
				</motion.button>
			</div>
		</div>
	);
};
