import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Loader from "../../components/Extra/Loader";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";

const Projects = () => {
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 1000);

	const personalProjects = [
		{
			id: 1,
			name: "Drone Shop",
			liveLink: "https://drone-shop-react.web.app/",
			clientCode:
				"https://github.com/coders-sohan/drone-shop-react/tree/main/main-site",
			serverCode:
				"https://github.com/coders-sohan/drone-shop-react/tree/main/server-site",
			imgUrl:
				"https://images.pexels.com/photos/529598/pexels-photo-529598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			category: "React JS, Firebase, Tailwind CSS",
		},
		{
			id: 2,
			name: "Mobile Shop",
			liveLink: "https://mobile-shop-react.web.app/",
			clientCode:
				"https://github.com/coders-sohan/mobile-shop-react/tree/main/client-site",
			serverCode:
				"https://github.com/coders-sohan/mobile-shop-react/tree/main/server-site",
			imgUrl:
				"https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			category: "React JS, Firebase, Tailwind CSS",
		},
		{
			id: 3,
			name: "Ed Tech Website",
			liveLink: "https://ed-tech-react.web.app/",
			clientCode: "https://github.com/coders-sohan/ed-tech-react-website",
			imgUrl:
				"https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			category: "React JS, Firebase, Bootstrap",
		},
		{
			id: 4,
			name: "Luxury Living",
			liveLink: "https://luxury-living-website.web.app/",
			clientCode: "https://github.com/coders-sohan/luxury-living-client-side",
			serverCode: "https://github.com/coders-sohan/luxury-living-server-side",
			imgUrl:
				"https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			category: "React JS, Firebase, Tailwind CSS",
		},
		{
			id: 5,
			name: "Niche eCommerce website",
			liveLink: "https://niche-product-website-auth.web.app/",
			clientCode: "https://github.com/coders-sohan/niche-website-client-side",
			serverCode: "https://github.com/coders-sohan/niche-website-server-side",
			imgUrl:
				"https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			category: "React JS, Firebase, Tailwind CSS",
		},
		{
			id: 6,
			name: "Travel Agency website",
			liveLink: "https://tourism-website-react.web.app/",
			clientCode:
				"https://github.com/coders-sohan/tourism-or-delivery-website-client-side",
			serverCode:
				"https://github.com/coders-sohan/tourism-or-delivery-website-server",
			imgUrl:
				"https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			category: "React JS, Firebase, Bootstrap",
		},
		{
			id: 7,
			name: "Book Archive",
			liveLink: "https://book-archive-now.netlify.app/",
			clientCode: "https://github.com/coders-sohan/book-archive",
			imgUrl:
				"https://images.pexels.com/photos/1831744/pexels-photo-1831744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			category: "JavaScript, Bootstrap",
		},
	];

	const teamProjects = [
		{
			id: 1,
			name: "Open PMS",
			liveLink: "https://open-pms.web.app/",
			clientCode: "https://github.com/sajidmahamud835/OpenPMS-client",
			serverCode: "https://github.com/sajidmahamud835/OpenPMS-server",
			imgUrl:
				"https://images.pexels.com/photos/4185952/pexels-photo-4185952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			category: "React JS, Firebase, Tailwind CSS",
		},
		{
			id: 2,
			name: "SMS Sender Application",
			// liveLink: "",
			clientCode: "https://github.com/sajidmahamud835/sms-senderv2-client",
			serverCode: "https://github.com/sajidmahamud835/sms-senderv2-server",
			imgUrl:
				"https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			category: "React JS, Firebase, Bootstrap",
		},
	];

	return (
		<>
			<Helmet>
				<title>All Projects - Explore my completed projects</title>
				<meta
					name="description"
					content="Almost all the web design and development-related projects I have done are on the project page"
				/>
			</Helmet>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<div id="eng" className="bg-white">
						<div className="flex justify-between items-center">
							<div className="container mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-16">
								<div>
									<h1 className="text-3xl underline underline-offset-4 decoration-orange-500 text-gray-800 text-center font-bold">
										All Projects
									</h1>
									<div className="grid lg:grid-cols-2 md:grid-cols-2 lg:justify-between md:justify-center items-center mt-8 gap-5 lg:px-36 px-0">
										{personalProjects.map((personalProject) => (
											<ProjectsCard
												key={personalProject.id + personalProject.name}
												project={personalProject}
											/>
										))}
									</div>
								</div>
								<div className="mt-16">
									<h1 className="text-3xl underline underline-offset-4 decoration-orange-500 text-gray-800 text-center font-bold">
										All Team Projects
									</h1>
									<div className="grid lg:grid-cols-2 md:grid-cols-2 lg:justify-between md:justify-center items-center mt-8 gap-5 lg:px-36 px-0">
										{teamProjects.map((teamProject) => (
											<ProjectsCard
												key={teamProject.id + teamProject.name}
												project={teamProject}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Projects;
