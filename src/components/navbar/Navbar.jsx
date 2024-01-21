// components
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
	return (
		<nav className="navbar h-[100px] relative">
			{/* Sidebar */}
			<Sidebar />
			<div className="wrapper px-[8%] w-full m-auto flex justify-between items-center h-full bg-[#663399]">
				<span className="font-bold">Mark Laurence Bongulto</span>
				<div className="social flex gap-5">
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