import React from "react";

const AboutSec = () => {
	return (
		<>
			<div className="bg-gradient-to-l from-orange-100 to-purple-100">
				<div className="flex justify-between items-center h-[70vh]">
					<div className="container mx-auto px-4 md:px-8 lg:px-10">
						<h1 className="text-3xl underline underline-offset-4 decoration-orange-500 text-gray-800 text-center font-bold">
							About Me
						</h1>
						<div className="grid lg:grid-cols-2 lg:justify-between md:justify-center items-center mt-12">
							<div className="flex lg:justify-end items-center lg:pr-10 lg:pl-12 lg:h-36 lg:pb-0 pb-5 md: text-center lg:text-right lg:border-r lg:border-dashed lg:border-purple-600 lg:w-full md:w-2/3 w-full lg:mx-0 mx-auto">
								<h1 className="md:text-3xl text-2xl font-semibold">
									Hi. I'm MI Sohan. <br /> Nice to meet you. Please take a look
									around.
								</h1>
							</div>
							<div className="flex lg:justify-start items-center lg:pl-10 lg:pr-12 lg:text-left lg:h-36 lg:pt-0 pt-5 lg:border-l lg:border-dashed lg:border-purple-600">
								<p className="text-justify">
									I am passionate about building excellent website that improves
									the lives of those around me. I specialize in creating website
									for clients ranging from individuals and small-businesses all
									the way to large enterprise corporations. What would you do if
									you had a website expert available at your fingertips?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutSec;
