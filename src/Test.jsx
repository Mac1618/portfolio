import { motion } from 'framer-motion';
import { useState } from 'react';

// shadcn ui
import { Button } from '@/components/ui/button';

const Test = () => {
	const [open, setOpen] = useState(false);

	// Test 2
	const container = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, y: -200, transition: { type: 'spring', stiffness: 500 } },
	};

	//Test 3
	const container3 = {
		hidden: { opacity: 0 },
		visible: (i) => ({
			opacity: 1,
			transition: { delay: i * 0.3 }, // sample calculations delay
			// transition: { staggerChildren: 0.2 } },    // children animation delays
		}),
	};

	// array of Items
	const arrItems = ['item1', 'item2', 'item3', 'item4'];

	return (
		<div className="flex justify-around items-center w-full">
			{/* Test 1 */}
			<motion.div
				className=" h-20 w-20 bg-blue-400 rounded-full cursor-pointer"
				//  Start
				initial={{ opacity: 0.1, scale: 0.5 }}
				// Transfomation
				transition={{ duration: 2 }}
				// Animation
				// animate={{ y: 100, backgroundColor: 'white', opacity: 1, scale: 1 }}
				whileHover={{ y: -100, backgroundColor: 'white', opacity: 1, scale: 1 }}
				// whileInView={{ x: 100, y: 100, backgroundColor: 'white', opacity: 1, scale: 1 }}

				// Draggable
				drag
			></motion.div>

			{/* Test 2 */}
			<div>
				<motion.div
					className=" h-20 w-20 bg-red-400 rounded-full cursor-pointer"
					variants={container}
					// initial="hidden"
					// animate="visible"
					animate={open ? 'visible' : 'hidden'}
				></motion.div>

				<button
					className="bg-blue-400 py-3 px-5 rounded-lg"
					onClick={() => setOpen((prev) => !prev)}
				>
					click me
				</button>
			</div>

			{/* Test 3 */}
			<motion.ul variants={container3} initial="hidden" animate="visible">
				{arrItems.map((item, index) => (
					<motion.li
						key={item}
						variants={container3}
						custom={index} // index mulply to delay
					>
						{item}
					</motion.li>
				))}
			</motion.ul>

			<Button className='bg-blue-500'>Click me</Button>
		</div>
	);
};

export default Test;
