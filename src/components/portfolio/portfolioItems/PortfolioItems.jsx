import { useRef } from 'react';

// framer motion
import { motion, useScroll, useTransform } from 'framer-motion';

const PortfolioItems = ({ portfolioitem }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		// offset: ['start start', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

	return (
		<section>
			<div className="container flex justify-center items-center w-full h-full overflow-hidden">
				<div className="wrapper flex justify-center items-center max-w-[80%] h-full m-auto gap-12">
					<div ref={ref} className="imgContainer flex-1  h-[50%]">
						<img
							src={portfolioitem.img}
							alt="portfolio image"
							className="object-cover w-full h-full"
						/>
					</div>

					<motion.div style={{ y: y }} className="text-container flex-1 flex flex-col gap-7">
						<h2 className="text-4xl font-semibold">{portfolioitem.title}</h2>
						<p className="text-gray-400 text-lg">{portfolioitem.desc}</p>
						<button className="bg-orange-500 w-[40%] py-2 rounded-lg hover:bg-orange-300 hover:text-black">
							See more
						</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioItems;
