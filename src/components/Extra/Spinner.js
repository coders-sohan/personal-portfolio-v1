import React from "react";

const Spinner = () => {
	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<h1 className="text-3xl font-bold animate-bounce">
					<span className="text-orange-500">Load</span>
					<span className="text-purple-500">ing...</span>
				</h1>
			</div>
		</>
	);
};

export default Spinner;
