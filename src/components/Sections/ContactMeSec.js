import React from "react";
import { HashLink } from "react-router-hash-link";

const ContactMeSec = () => {
	return (
		<>
			<div className="bg-gradient-to-l from-purple-600 to-orange-600">
				<div className="flex justify-between items-center md:h-[35vh] h-[25vh]">
					<div className="container mx-auto px-4 md:px-8 lg:px-10">
						<h1 className="lg:text-3xl md:text-2xl text-xl underline underline-offset-4 decoration-white text-white text-center font-bold">
							Need to discuss about your upcoming projects?
						</h1>
						<h1 className="lg:text-3xl md:text-2xl text-xl underline underline-offset-4 decoration-white text-white text-center font-bold md:mt-5 mt-3">
							...{" "}
							<HashLink
								to="/contact#eng"
								smooth
								className="hover:text-yellow-300 hover:decoration-yellow-300 transition duration-150 ease-linear"
							>
								Let's talk
							</HashLink>{" "}
							...
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactMeSec;
