import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/Extra/Spinner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";
import ErrorPage from "./Pages/Errors/ErrorPage";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 1500);

	return (
		<>
			{isLoading && <Spinner />}
			{!isLoading && (
				<>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="projects" element={<Projects />} />
						<Route path="contact" element={<Contact />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
					<Footer />
				</>
			)}
		</>
	);
}

export default App;
