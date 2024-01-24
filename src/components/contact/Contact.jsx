import { useRef, useState } from 'react';

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Emain js
import emailjs from '@emailjs/browser';

// framer motion
import { motion } from 'framer-motion';

// variants
const variants = {
	initial: {
		y: 200,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
			staggeredChildren: 0.1,
		},
	},
};

const Contact = () => {
	const formRef = useRef();
	const [loading, setLoading] = useState(false); // New state for loading

	const sendEmail = (e) => {
		e.preventDefault();

		// Disable the button while sending email
		setLoading(true);

		emailjs
			.sendForm(
				`${import.meta.env.VITE_SERVICE_ID}`,
				`${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`,
				formRef.current,
				`${import.meta.env.VITE_PUBLIC_KEY}`
			)
			.then(
				(result) => {
					console.log(result.text);
					toast.success('Email sent successfuly!', {
						position: 'top-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
					});
				},
				(error) => {
					console.log(error.text);
					toast.error('Email failed to send. Please try again later!', {
						position: 'top-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
					});
				}
			)
			.finally(() => {
				// Enable the button after sending email
				setLoading(false);
			});
	};

	return (
		<motion.div variants={variants} initial="initial" whileInView="animate">
			<div className="py-8 lg:py-12 px-4 mx-auto max-w-screen-md">
				<motion.h2
					className="mb-4 text-4xl tracking-tight font-extrabold text-center"
					variants={variants}
				>
					Let&apos;s Work Together
				</motion.h2>
				<motion.p
					className="mb-6 lg:mb-12 font-light text-center text-gray-500  sm:text-lg"
					variants={variants}
				>
					Got a technical issue? Want to send feedback about a beta feature? Need details about our
					Business plan? Let us know.
				</motion.p>
				<motion.form ref={formRef} onSubmit={sendEmail} className="space-y-6" variants={variants}>
					<motion.div variants={variants}>
						<label className="block mb-2 text-sm font-medium text-white ">Your Name</label>
						<input
							type="text"
							name="name"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 "
							placeholder="name@flowbite.com"
							required
						/>
					</motion.div>
					<motion.div variants={variants}>
						<label className="block mb-2 text-sm font-medium text-white ">Your email</label>
						<input
							type="email"
							name="email"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 "
							placeholder="name@flowbite.com"
							required
						/>
					</motion.div>
					<motion.div className="sm:col-span-2" variants={variants}>
						<label className="block mb-2 text-sm font-medium text-white dark:text-gray-400">
							Your message
						</label>
						<textarea
							name="message"
							rows="6"
							className="block p-1.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Leave a comment..."
						></textarea>
					</motion.div>
					<button
						disabled={loading}
						type="submit"
						className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-500 sm:w-fit hover:bg-orange-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300"
					>
						{loading ? 'Sending...' : 'Send message'}
					</button>
				</motion.form>
			</div>
			<ToastContainer />
		</motion.div>
	);
};

export default Contact;
