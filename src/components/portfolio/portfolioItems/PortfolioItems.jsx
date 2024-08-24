import PropTypes from 'prop-types';
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

	const handleClick = () => {
		window.open(portfolioitem.url, '_blank', 'noopener,noreferrer');
	};

	return (
		<section>
			<div className="container flex justify-center items-center w-full h-full overflow-hidden">
				<div className="wrapper flex justify-center items-center max-w-[80%] h-full m-auto gap-12 max-sm:flex-col max-sm:pt-[50%]">
					<div ref={ref} className="imgContainer flex-1 h-[50%]">
						<img
							src={portfolioitem.img}
							alt="portfolio image"
							className="object-cover w-full h-full max-sm:h-[80%] max-sm:max-w-sm"
						/>
					</div>

					<motion.div
						style={{ y: y }}
						className="text-container flex-1 flex flex-col gap-7 max-sm:gap-3"
					>
						<h2 className="text-4xl font-semibold max-sm:text-3xl">{portfolioitem.title}</h2>
						<p className="text-gray-400 text-lg">{portfolioitem.desc}</p>
						<p className="text-gray-400 text-lg">
							Tech Stack:{' '}
							{portfolioitem.techStack.map((tech, i) => (
								<span key={i} className="text-white/70 font-semibold">
									{tech},{' '}
								</span>
							))}
						</p>
						<button
							className="bg-orange-500 w-[40%] py-2 rounded-lg hover:bg-orange-300 hover:text-black max-sm:py-1"
							onClick={handleClick}
						>
							See more
						</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

// Define the expected prop types
PortfolioItems.propTypes = {
	portfolioitem: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		desc: PropTypes.string.isRequired,
		techStack: PropTypes.array.isRequired,
		url: PropTypes.string.isRequired,
	}).isRequired,
};

export default PortfolioItems;
