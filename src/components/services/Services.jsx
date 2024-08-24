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
	const isInView = useInView(ref, { margin: '-10px' });

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
				className="textContainer flex-[0.5] self-end flex justify-between items-center gap-8  pt-5 max-sm:pt-2 max-sm:gap-3 max-sm:w-[70%]"
			>
				<p className="font-[100px] text-sm max-sm:font-[50px]">
					I focus on helping your brand grow <br className="max-sm:hidden" /> and move forward
				</p>
				<hr className="w-[400px] border-t-4 border-gray-500 max-sm:w-[50%]" />
			</motion.div>
			<motion.div
				variants={variants}
				className="titleContainer flex-[1.5] flex flex-col justify-center items-center gap-3 max-sm:px-[5%] max-sm:flex-[1] max-sm:py-[5%]"
			>
				<div className="title flex flex-row justify-between items-center gap-5 max-sm:w-full max-sm:justify-evenly">
					<img
						className="w-[220px] h-[60px] rounded-full object-cover max-sm:w-[35%] max-sm:rounded-lg"
						src="./people.webp"
						alt=""
					/>
					<h1 className="text-5xl font-[100px] max-sm:text-3xl">
						<span className="font-extrabold text-yellow-500 hover:text-yellow-200 cursor-pointer">
							Unique
						</span>{' '}
						Ideas
					</h1>
				</div>
				<div className="flex flex-row justify-between items-center gap-5 max-sm:px-[5%]">
					<h1 className="text-5xl font-[100px] max-sm:text-3xl">
						<span className="font-extrabold text-yellow-500 hover:text-yellow-200 cursor-pointer ">
							For Your
						</span>{' '}
						Business.
					</h1>
					<button className="py-3 px-8 bg-yellow-500 text-black shadow-sm rounded-full text-sm hover:bg-yellow-200 max-sm:hidden ">
						WHAT I DO?
					</button>
				</div>
			</motion.div>
			<motion.div
				variants={variants}
				className="listContainer flex-[2] flex justify-between items-center px-[5%] max-sm:flex-col max-sm:gap-3"
			>
				<motion.div
					variants={variants}
					className="w-[40rem] p-10 h-full border-gray-600 border-[0.5px] hover:bg-gray-300 hover:text-black cursor-pointer max-sm:max-w-full max-sm:p-2"
				>
					<h2 className="mb-3 font-bold text-lg h-14 max-sm:h-6 max-sm:text-md">
						Front-End Development
					</h2>
					<p className="text-sm ">
						I specialize in front-end development, creating dynamic and visually appealing user
						interfaces with React.js. I efficiently manage state using Zustand, design responsive
						layouts with TailwindCSS, and implement sleek components with ShadcnUI. I also integrate
						Lucide React Icons for intuitive visuals, Sonner for streamlined notifications, and
						React-pdf for generating and displaying PDF documents directly within web applications.
					</p>
				</motion.div>
				<motion.div
					variants={variants}
					className="w-[40rem] p-10 h-full border-gray-600 border-[0.5px] hover:bg-gray-300 hover:text-black cursor-pointer max-sm:max-w-full max-sm:p-2"
				>
					<h2 className="mb-3 font-bold text-lg h-14 max-sm:h-6 max-sm:text-md">
						Back-End Development
					</h2>
					<p className="text-sm ">
						I specialize in back-end development, creating robust and scalable server-side
						applications with Express.js. My expertise includes working with databases like MongoDB,
						MySQL, and PostgreSQL, with Mongoose and Prisma for efficient data modeling. I implement
						secure authentication with JSON Web Tokens and Bcrypt, and handle API communication
						using Axios. I also use Postman for API testing and deploy my applications seamlessly on
						platforms like Vercel or Render.
					</p>
				</motion.div>
				<motion.div
					variants={variants}
					className="w-[40rem] p-10 h-full border-gray-600 border-[0.5px] hover:bg-gray-300 hover:text-black cursor-pointer max-sm:max-w-full max-sm:p-2"
				>
					<h2 className="mb-3 font-bold text-lg h-14 max-sm:h-12 max-sm:text-md">
						Next.js Application Development
					</h2>
					<p className="text-sm ">
						developing sophisticated web applications with Next.js, utilizing file-based routing for
						efficient navigation and implementing server actions for seamless server-side logic. I
						prioritize robust authentication and authorization processes to ensure secure user
						access, and I leverage middleware to optimize performance and enhance security across
						the application.
					</p>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Services;
