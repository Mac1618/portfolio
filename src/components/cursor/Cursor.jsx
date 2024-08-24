import { useEffect, useState } from 'react';

// motion framer
import { motion } from 'framer-motion';

const Cursor = () => {
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const mouseMove = (e) => {
			setPosition({
				x: e.clientX,
				y: e.clientY,
			});
		};

		window.addEventListener('mousemove', mouseMove);

		return () => {
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	// console.log(position);

	return (
		<motion.div
			className="w-12 h-12 rounded-full border-white border-2 fixed z-[999]"
			animate={{ x: position.x, y: position.y }}
		></motion.div>
	);
};

export default Cursor;
