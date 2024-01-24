import { useRef } from 'react';

// constants
import { portfolioItems } from '../../constants/constants';

// components
import PortfolioItems from './portfolioItems/PortfolioItems';

// motion framer
import { motion, useScroll, useSpring } from 'framer-motion';

const Portfolio = () => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['end end', 'start start'],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	return (
		<div className="portfolio relative" ref={ref}>
			<div className="progress sticky top-0 left-0 pt-12  text-center text-orange-400 text-5xl font-semibold">
				<h2>Featured Works</h2>
				<motion.div style={{ scaleX: scaleX }} className="porgressBar h-2 bg-white"></motion.div>
			</div>
			{portfolioItems.items.map((portfolioItem) => (
				<PortfolioItems key={portfolioItem.id} portfolioitem={portfolioItem} />
			))}
		</div>
	);
};

export default Portfolio;
