import { useState } from 'react';

// framer motion
import { motion } from 'framer-motion';

// sidebar components
import Links from './links/Links';
import ToggleButton from './toggeButton/ToggleButton';

// variants
const variants = {
	open: {
		clipPath: 'circle(1200px at 50px 50px)',
		transition: {
			type: 'spring',
			stiffness: 20,
		},
	},
	closed: {
		clipPath: 'circle(0px at 190px 50px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

const Sidebar = () => {
	const [open, setOpen] = useState(false);

	return (
		<motion.div
			className="sidebar flex flex-col justify-center items-center bg-white text-black"
			animate={open ? 'open' : 'closed'}
		>
			<motion.div
				className={`z-[999] bg fixed top-0 right-0 bottom-0 w-[250px] bg-white max-sm:w-[180px]`}
				variants={variants}
			>
				<Links />
			</motion.div>
			<ToggleButton setOpen={setOpen} />
		</motion.div>
	);
};

export default Sidebar;
