import { NavLink } from "react-router-dom";

export function TitleCard() {
	return (
		<>
			<div className="flex flex-row max-sm:flex-col content-center bg-gradient-to-r from-blue-500 to-purple-500 p-10 rounded-lg shadow-lg">
				<h1 className="flex-1 justify-self-end text-4xl font-extrabold tracking-wide text-white">
					Polaris Blog
				</h1>
				<div className="flex-stretch max-sm:mt-2 justify-center content-center bg-amber-200 hover:bg-amber-300 rounded-lg shadow-lg px-3 mr-2 min-w-[80px] text-center cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out">
					<NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-blue-700 transition-all duration-300" : "font-medium hover:text-blue-600 transition-all duration-300"}>Home</NavLink>
				</div>
				<div className="flex-stretch max-sm:mt-2 justify-center content-center bg-amber-200 hover:bg-amber-300 rounded-lg shadow-lg px-3 mr-2 min-w-[80px] text-center cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out">
					<NavLink to="/archives" className={({ isActive }) => isActive ? "font-bold text-blue-700 transition-all duration-300" : "font-medium hover:text-blue-600 transition-all duration-300"}>Archives</NavLink>
				</div>
				<div className="flex-stretch max-sm:mt-2 justify-center content-center bg-amber-200 hover:bg-amber-300 rounded-lg shadow-lg px-3 mr-2 min-w-[80px] text-center cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out">
					<NavLink to="/about" className={({ isActive }) => isActive ? "font-bold text-blue-700 transition-all duration-300" : "font-medium hover:text-blue-600 transition-all duration-300"}>About</NavLink>
				</div>
			</div>
		</>
	);
}
