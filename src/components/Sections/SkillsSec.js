import React from "react";
import HTML from "../../assets/img/html.png";
import CSS from "../../assets/img/css.png";
import JS from "../../assets/img/javascript.png";
import REACT_JS from "../../assets/img/react.png";
import NODE_JS from "../../assets/img/node.png";
import MongoDB from "../../assets/img/mongo.png";
import Firebase from "../../assets/img/firebase.png";
import Tailwind from "../../assets/img/tailwind.png";
import Bootstrap from "../../assets/img/bootstrap.png";
import MUI from "../../assets/img/mui.png";
import NEXT_JS_DARK from "../../assets/img/next_js_dark.png";
// import NEXT_JS_LIGHT from "../../assets/img/next_js_light.png";
import Redux from "../../assets/img/redux.png";

const SkillsSec = () => {
	const skillsData = [
		{
			title: "HTML5",
			image: HTML,
		},
		{
			title: "CSS3",
			image: CSS,
		},
		{
			title: "JavaScript",
			image: JS,
		},
		{
			title: "React JS",
			image: REACT_JS,
		},
		{
			title: "Node JS",
			image: NODE_JS,
		},
		{
			title: "Mongo DB",
			image: MongoDB,
		},
		{
			title: "Firebase",
			image: Firebase,
		},
		{
			title: "Tailwind",
			image: Tailwind,
		},
		{
			title: "Bootstrap",
			image: Bootstrap,
		},
		{
			title: "Material UI",
			image: MUI,
		},
		{
			title: "Next JS",
			image: NEXT_JS_DARK,
		},
		{
			title: "Redux",
			image: Redux,
		},
	];

	return (
		<>
			<div className="bg-white">
				<div className="flex justify-between items-center">
					<div className="container mx-auto px-4 md:px-8 lg:px-10 md:py-16 py-10">
						<h1 className="text-3xl underline underline-offset-4 decoration-orange-500 text-gray-800 text-center font-bold">
							My Skills
						</h1>
						<div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:justify-between md:justify-center items-center mt-10 gap-5 lg:px-36 px-0">
							{skillsData.map((skillData, index) => (
								<div className="image-card" key={skillData.title + index}>
									<div className="">
										<img
											className="h-auto w-20 mx-auto"
											src={skillData.image}
											alt={skillData.title}
										/>
										<h1 className="text-lg font-semibold text-center mt-3">{skillData.title}</h1>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SkillsSec;
