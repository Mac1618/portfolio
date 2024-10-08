// framer motion
import { motion } from 'framer-motion';

// variants
const variants = {
	// for TEXTS and BUTTONS
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},

	// for IMAGE and ICONS
	scrollButtons: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 1,
			repeat: Infinity,
		},
	},
};

// for Background Text
const sliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: '-200%',
		transition: {
			duration: 20,
			repeat: Infinity,
			repeatType: 'mirror',
		},
	},
};

const Hero = () => {
	return (
		<div className="hero relative h-[calc(100vh-100px)] w-full bg-blue-100 overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[rgb(17,17,50)]">
			<div className="z-[99] wrapper h-full w-full px-[8%] ">
				<motion.div
					variants={variants}
					initial="initial"
					animate="animate"
					className="z-[99] text-containers h-full max-w-md flex flex-col justify-center gap-8 max-sm:gap-10 max-sm:items-center"
				>
					<motion.h2
						variants={variants}
						initial="initial"
						animate="animate"
						className="z-[99] text-2xl text-[#663399] font-bold tracking-[4px] max-sm:text-lg"
					>
						Mark Laurence Bongulto
					</motion.h2>
					<motion.h1
						variants={variants}
						initial="initial"
						animate="animate"
						className="z-[99] text-6xl font-bold block leading-[1.2] max-sm:text-4xl max-sm:text-center"
					>
						A Fullstack Web Developer
					</motion.h1>

					<motion.div
						variants={variants}
						initial="initial"
						animate="animate"
						className="z-[99] buttons flex gap-10"
					>
						<motion.button
							variants={variants}
							initial="initial"
							animate="animate"
							className="z-[99] p-3 border border-white rounded-lg bg-transparent shadow-md max-sm:text-sm"
						>
							<a href="#Portfolio" className="z-[99]">
								See the Latest Work
							</a>
						</motion.button>
						<motion.button
							variants={variants}
							initial="initial"
							animate="animate"
							className="z-[99] p-3 bg-white hover:bg-gray-200 text-black rounded-lg shadow-md max-sm:text-sm"
						>
							<a href="#Contact" className="z-[99]">
								Contact me.
							</a>
						</motion.button>
					</motion.div>

					<motion.img
						variants={variants}
						animate="scrollButtons"
						className="w-12"
						src="./scroll.png"
						alt="scroll icon"
					/>
				</motion.div>
			</div>

			<motion.div
				variants={sliderVariants}
				initial="initial"
				animate="animate"
				className="absolute z-[10] w-[50%] text-[35vh] bottom-0 whitespace-nowrap text-[#ffffff09] max-sm:text-[20vh]"
			>
				Developer Gamer Programmer
			</motion.div>

			<div className="z-[99] img-container h-full w-full absolute top-0 right-[-49%] max-sm:hidden">
				<img className=" w-[100vh]" src="./hero.png" alt="profile image" />
			</div>
		</div>
	);
};

export default Hero;
