import React from "react";
import MemberPresentation from "../MemberPresentation";
import GroupPresentation from "../GroupPresentation";
import Header from "../Header";
import Contact from "../Contact";

const Main = () => {
	return (
		<div>
			<Header />
			<GroupPresentation />
			<MemberPresentation />
			<Contact />
		</div>
	);
};

export default Main;
