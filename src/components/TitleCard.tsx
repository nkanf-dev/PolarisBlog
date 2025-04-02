export function TitleCard() {
	return (
		<>
			<div className="flex flex-row max-sm:flex-col content-center bg-gradient-to-r from-blue-500 to-purple-500 p-10 rounded-lg shadow-lg">
				<h1 className="flex-1 justify-self-end text-4xl font-extrabold tracking-wide text-white">
					Polaris Blog
				</h1>
				<div className="flex-stretch max-sm:mt-2 justify-center content-center bg-amber-200 rounded-lg shadow-lg p-2 mr-2">
					<span>Home</span>
				</div>
				<div className="flex-stretch max-sm:mt-2 justify-center content-center bg-amber-200 rounded-lg shadow-lg p-2 mr-2">
					<span>Achieves</span>
				</div>
				<div className="flex-stretch max-sm:mt-2 justify-center content-center bg-amber-200 rounded-lg shadow-lg p-2 mr-2">
					<span>About</span>
				</div>
			</div>
		</>
	);
}
