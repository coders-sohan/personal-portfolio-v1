import React from "react";
import { Helmet } from "react-helmet";
import Lottie from "react-lottie";
import { HashLink } from "react-router-hash-link";
import animationData from "../../assets/lottie/errorPage.json";

const ErrorPage = () => {
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
			<Helmet>
				<title>Page Not Found - 404 Error</title>
			</Helmet>
			<div id="eng" className="flex justify-between items-center h-screen">
				<div className="container mx-auto px-4 md:px-8 lg:px-10 pt-20 pb-16">
					<div className="">
						<Lottie
							options={defaultOptions}
							height={350}
							width={350}
							isStopped={true}
							isPaused={true}
						/>
						<div className="text-center">
							<HashLink to="/#eng" smooth>
								<button className="btn btn-secondary">Go to home page</button>
							</HashLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ErrorPage;
