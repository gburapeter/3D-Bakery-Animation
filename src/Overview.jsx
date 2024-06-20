import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import Arrow from "./CustomButtons/Arrow";
import Donut from "./Donut";

export const Overview = ({ handleStart }) => {
	const todaysDate = new Date().toLocaleString();
	return (
		<div className="h-screen grid items-start py-16 px-6 lg:px-16 xl:px-32 2xl:px-48 grid-cols-4 w-screen relative">
			<div className="col-span-2 text-3xl lg:text-4xl 2xl:text-5xl">
				Bakery Animation
			</div>

			<div className="col-span-2 text-end flex flex-col space-y-4 lg:space-y-5 text-xl lg:text-2xl xl:text-3xl z-50">
				<div>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/p%C3%A9ter-ghiurutan-bura-2765a41a2/"
						className="w-full relative group cursor-pointer hover:text-gray-700  "
					>
						Linkedin
						<span className="absolute -bottom-1 right-0 w-full h-[0.15rem] bg-black transition-all group-hover:w-0"></span>
					</a>
				</div>
				<div>
					<a
						target="_blank"
						href="https://github.com/gburapeter"
						className="w-full relative group cursor-pointer hover:text-gray-700  "
					>
						Github
						<span className="absolute -bottom-1 right-0 w-full h-[0.15rem] bg-black transition-all group-hover:w-0"></span>
					</a>
				</div>
			</div>

			<div className=" z-50 col-span-2 text-lg inline-flex h-full items-end text-start">
				<a
					target="_blank"
					className=""
					href="https://www.freepik.com/free-vector/hand-drawn-plain-donut_16263485.htm#query=donut%20svg&position=0&from_view=keyword&track=ais_user&uuid=997c96f7-11bd-4a70-8bea-4ec6211fe314"
				>
					svg by{" "}
					<span className="italic text-slate-900">rawpixel.com</span>
				</a>
			</div>

			<div className=" h-full col-start-4 text-end inline-flex items-end justify-end w-full text-xl xl:text-2xl ">
				{todaysDate}
			</div>

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
