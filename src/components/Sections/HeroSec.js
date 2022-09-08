import React from "react";
import Lottie from "react-lottie";
import { HashLink } from "react-router-hash-link";
import animationData from "../../assets/lottie/programmingComputer.json";

const HeroSec = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<>
			<div className="flex justify-between items-center h-screen">
				<div className="container mx-auto px-4 md:px-8 lg:px-10 md:pt-20 pt-36 pb-16">
					<div className="grid lg:grid-cols-3 justify-between items-center">
						<div className="lg:p-10 md:p-5 p-0 col-span-2">
							<h1 className="my-5 text-sm text-orange-500">hi, my name is</h1>
							<h1 className="mt-5 mb-3 lg:text-5xl md:text-3xl text-2xl font-semibold">
								Mofizul Islam
							</h1>
							<h1 className="mt-3 mb-5 lg:text-5xl md:text-3xl text-2xl font-semibold text-purple-500">
								I'm a Full Stack Developer.
							</h1>
							<p className="my-5 text-sm">
								I'm a full-stack developer specializing in building (and
								occasionally designing) exceptional digital experiences.
								Currently, I'm focused on building responsive full-stack web
								applications.
							</p>
							<div>
								<HashLink to={`/projects#eng`}>
									<button className="btn btn-primary">Related works</button>
								</HashLink>
							</div>
						</div>
						<div className="lg:p-10 md:p-5 p-0">
							<Lottie
								options={defaultOptions}
								height={350}
								width={350}
								isStopped={true}
								isPaused={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSec;
