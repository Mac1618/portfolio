// components
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
	const handleLink = (url) => {
		return window.open(`${url}`, '_black');
	};

	return (
		<nav className="navbar h-[100px] relative">
			{/* Sidebar */}
			<Sidebar />
			<div className="wrapper relative px-[8%] w-full m-auto flex justify-between items-center h-full max-sm:flex-col max-sm:justify-center">
				<span className="font-bold">MY PORTFOLIO</span>
				<div className="social flex gap-5 max-sm:gap-10 max-sm:mt-3">
					<div className="cursor-pointer" onClick={() => handleLink('https://github.com/Mac1618')}>
						<img
							src="/github.png"
							alt="github logo"
							className="bg-white rounded-full cursor-pointer"
							width={30}
							height={30}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
