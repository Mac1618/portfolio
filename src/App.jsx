import './app.scss';

// components
import Navbar from './components/navbar/Navbar';

function App() {
	return (
		<div className="h-screen">
			<section>
				<Navbar />
			</section>
			<section>Parallax</section>
			<section>Services</section>
			<section>Parallax</section>
			<section>Portfolio1</section>
			<section>Portfolio2</section>
			<section>Portfolio3</section>
			<section>Contact</section>
		</div>
	);
}

export default App;
