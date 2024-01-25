// components
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
	return (
		<nav className="navbar h-[100px] relative">
			{/* Sidebar */}
			<Sidebar />
			<div className="wrapper relative px-[8%] w-full m-auto flex justify-between items-center h-full max-sm:flex-col max-sm:justify-center">
				<span className="font-bold">MY PORTFOLIO</span>
				<div className="social flex gap-5 max-sm:gap-10 max-sm:mt-3">
					<a href="#">
						<img src="/facebook.png" alt="facebook image" width={24} height={24} />
					</a>
					<a href="#">
						<img src="/instagram.png" alt="instagram image" width={24} height={24} />
					</a>
					<a href="#">
						<img src="/youtube.png" alt="youtube image" width={24} height={24} />
					</a>
					<a href="#">
						<img src="/dribbble.png" alt="dribbble image" width={24} height={24} />
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
