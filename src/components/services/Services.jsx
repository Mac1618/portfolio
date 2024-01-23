import { useRef } from 'react';

// framer motion
import { motion, useInView } from 'framer-motion';

// Animation Variants
const variants = {
	initial: {
		x: -300,
		y: 50,
		opacity: 0,
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Services = () => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: '-100px' });

	return (
		<motion.div
			variants={variants}
			initial="initial"
			// whileInView="animate"
			animate={isInView && 'animate'}
			ref={ref}
			className="services h-full bg-gradient-to-b from-[#0c0c1d] to-[#111132] flex flex-col justify-between"
		>
			<motion.div
				variants={variants}
				className="textContainer flex-[0.5] self-end flex justify-between items-center gap-8  pt-5"
			>
				<p className="font-[100px] text-sm">
					I focus on helping your brand grow <br /> and move forward
				</p>
				<hr className="w-[400px] border-t-4 border-gray-500" />
			</motion.div>
			<motion.div
				variants={variants}
				className="titleContainer flex-[1.5] flex flex-col justify-center items-center gap-3"
			>
				<div className="title flex flex-row justify-between items-center gap-5">
					<img
						className="w-[220px] h-[60px] rounded-full object-cover"
						src="./people.webp"
						alt=""
					/>
					<h1 className="text-5xl font-[100px]">
						<span className="font-extrabold text-yellow-500 hover:text-yellow-200 cursor-pointer">
							Unique
						</span>{' '}
						Ideas
					</h1>
				</div>
				<div className="flex flex-row justify-between items-center gap-5">
					<h1 className="text-5xl font-[100px]">
						<span className="font-extrabold text-yellow-500 hover:text-yellow-200 cursor-pointer">
							For Your
						</span>{' '}
						Business.
					</h1>
					<button className="py-3 px-8 bg-yellow-500 text-black shadow-sm rounded-full text-sm hover:bg-yellow-200">
						WHAT I DO?
					</button>
				</div>
			</motion.div>
			<motion.div
				variants={variants}
				className="listContainer flex-[2] flex justify-between items-center px-[5%]"
			>
				<motion.div
					variants={variants}
					className="w-[40rem] p-10 h-full border-gray-600 border-[0.5px] hover:bg-gray-300 hover:text-black cursor-pointer"
				>
					<h2 className="mb-3 font-bold text-lg h-14">MERN Stack Development</h2>
					<p className="text-sm ">
						Craft modern web applications with a seamless user experience using the MERN stack—HTML,
						CSS, Bootstrap, React.js, Node.js, Express.js, Mongoose, and MongoDB. From concept to
						deployment, ensure a robust and responsive user interface.
					</p>
				</motion.div>
				<motion.div
					variants={variants}
					className="w-[40rem] p-10 h-full border-gray-600 border-[0.5px] hover:bg-gray-300 hover:text-black cursor-pointer"
				>
					<h2 className="mb-3 font-bold text-lg h-14">Secure Authentication Solutions</h2>
					<p className="text-sm ">
						Implement secure user authentication and authorization using JSON Web Tokens (JWT).
						Safeguard sensitive data and functionalities, providing users with confidence in
						interacting with your application.
					</p>
				</motion.div>
				<motion.div
					variants={variants}
					className="w-[40rem] p-10 h-full border-gray-600 border-[0.5px] hover:bg-gray-300 hover:text-black cursor-pointer"
				>
					<h2 className="mb-3 font-bold text-lg h-14">Efficient MongoDB Database Management</h2>
					<p className="text-sm ">
						Optimize database performance with expert MongoDB and Mongoose skills. Implement
						efficient CRUD operations for data access and retrieval, ensuring scalability and
						responsiveness.
					</p>
				</motion.div>
				<motion.div
					variants={variants}
					className="w-[40rem] p-10 h-full border-gray-600 border-[0.5px] hover:bg-gray-300 hover:text-black cursor-pointer"
				>
					<h2 className="mb-3 font-bold text-lg h-14">Next.js 14 and Tailwind CSS Development</h2>
					<p className="text-sm ">
						Stay ahead with Next.js 14 for web application development, featuring server-side
						rendering, routing, and performance optimization. Combine with Tailwind CSS for
						efficient and visually appealing styling, delivering cutting-edge user interfaces.
					</p>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Services;
