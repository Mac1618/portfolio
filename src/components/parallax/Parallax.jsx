import { useRef } from 'react';

// framer motion
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const textBg = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
	const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

	return (
		<div
			ref={ref}
			className={`parallax h-full w-full relative flex justify-center items-center overflow-hidden
      ${
				type === 'services'
					? 'bg-gradient-to-b from-[#111132] to-[#0c0c1d]'
					: 'bg-gradient-to-b from-[#111132] to-[#505064]'
			}`}
		>
			<motion.h1
				style={{ y: textBg }}
				className="text-6xl font-semibold font-sans z-0 max-sm:text-3xl"
			>
				{type === 'services' ? 'What We Do?' : 'What We Did?'}
			</motion.h1>
			<motion.div className="mountains absolute bg-img-mountains w-full h-full bg-cover z-30 max-sm:hidden"></motion.div>
			<motion.div
				style={{ y: yBg }}
				className={`planets absolute ${
					type === 'services' ? 'bg-img-planets' : 'bg-img-sun'
				} w-full h-full bg-cover z-20 `}
			></motion.div>
			<motion.div
				style={{ x: yBg }}
				className="stars absolute bg-img-stars w-full h-full bg-cover z-10"
			></motion.div>
		</div>
	);
};

export default Parallax;
