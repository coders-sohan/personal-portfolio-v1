import React from "react";
import { Helmet } from "react-helmet";
import AboutSec from "../../components/Sections/AboutSec";
import ContactMeSec from "../../components/Sections/ContactMeSec";
import HeroSec from "../../components/Sections/HeroSec";
import SkillsSec from "../../components/Sections/SkillsSec";

const Home = () => {
	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="I'm a full-stack developer specializing in building (and
			occasionally designing) exceptional digital experiences.
			Currently, I'm focused on building responsive full-stack web
			applications."
				/>
				<title>MOFIZUL ISLAM - Full Stack Web Developer</title>
			</Helmet>
			<div id="eng">
				<HeroSec />
				<AboutSec />
				<SkillsSec />
				<ContactMeSec />
			</div>
		</>
	);
};

export default Home;
