import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
	const Links = [
		{ name: "PROJECTS", link: "/projects" },
		{ name: "BLOGS", link: "/blogs" },
		{ name: "CONTACT", link: "/contact" },
	];
	const [open, setOpen] = useState(false);

	return (
		<div className="shadow-md w-full fixed top-0 left-0 z-10">
			<div className="md:flex items-center justify-between bg-white py-4 lg:px-24 md:px-10 px-7">
				<HashLink
					smooth
					to="/#eng"
					className="text-2xl font-semibold cursor-pointer font-[Poppins] 
		text-gray-800 hover:text-orange-500 transition-all duration-300 ease-in mt-[0.1rem]"
				>
					MI SOHAN
				</HashLink>

				<div
					onClick={() => setOpen(!open)}
					className="text-xl absolute right-8 top-5 cursor-pointer md:hidden"
				>
					{open ? (
						<AiOutlineCloseSquare className="font-normal" />
					) : (
						<FaBars className="font-normal" />
					)}
				</div>

				<ul
					className={`md:flex md:items-center md:pb-0 absolute md:static md:bg-white bg-gray-200 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
						open ? "top-20 " : "top-[-490px]"
					}`}
				>
					{Links.map((link) => (
						<li key={link.name} className="md:ml-8 text-lg md:my-0 my-7">
							<HashLink
								to={link.link + `#eng`}
								className="text-gray-800 hover:text-purple-500 duration-500"
							>
								{link.name}
							</HashLink>
						</li>
					))}
					{/* <Button>
				Get Started
			</Button> */}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
