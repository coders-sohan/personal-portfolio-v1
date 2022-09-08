import React from "react";

const Footer = () => {
	return (
		<>
			<div className="bg-gray-700 text-white">
				<div className="container mx-auto px-4 md:px-8 lg:px-10 py-8">
					<div className="flex flex-col items-center justify-center">
						<div className="flex items-center mt-6">
							<p className="text-base font-light leading-4 text-white">
								{Date().slice(11, 15)}{" "}
								<span className="font-semibold text-purple-400 transition duration-150 ease-linear hover:text-orange-300">
									MI SOHAN
								</span>
							</p>
							<div className="border-l border-white pl-2 ml-2">
								<p className="text-base font-light leading-4 text-white">
									&copy; All rights reserved
								</p>
							</div>
						</div>
						<div className="flex items-center gap-x-8 mt-6">
							<div className="cursor-pointer">
								<p className="font-light">facebook</p>
							</div>
							<div className="cursor-pointer">
								<p className="font-light">youtube</p>
							</div>
							<div className="cursor-pointer">
								<p className="font-light">linkedin</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
