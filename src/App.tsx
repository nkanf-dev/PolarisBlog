import "./App.css";
import { TitleCard } from "./components/TitleCard";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Archives from "./pages/Archives";
import About from "./pages/About";

function App() {
	return (
		<>
			<div className="flex flex-col h-screen bg-gray-100 p-5">
				<TitleCard />
				
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/archives" element={<Archives />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
