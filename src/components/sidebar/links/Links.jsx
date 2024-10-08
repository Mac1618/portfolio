// framer motion
import { motion } from 'framer-motion';

// variants
const variants = {
	open: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};
const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	},
};

const Links = () => {
	const items = ['Homepage', 'Services', 'Portfolio', 'Contact'];
	return (
		<motion.div
			className="links absolute w-full h-full flex  flex-col items-center justify-start pt-20 gap-5"
			variants={variants}
		>
			{items.map((item) => (
				<motion.a
					className="text-[20px]"
					href={`#${item}`}
					key={item}
					variants={itemVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
				>
					{item}
				</motion.a>
			))}
		</motion.div>
	);
};

export default Links;
