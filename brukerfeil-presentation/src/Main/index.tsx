import React from "react";
import MemberPresentation from "../MemberPresentation";
import GroupPresentation from "../GroupPresentation";
import Header from "../Header";
import Contact from "../Contact";
import styles from "./styles.module.css";

const Main = () => {
	return (
		<div className={styles.container}>
			<Header />
			<GroupPresentation />
			<MemberPresentation />
			<Contact />
		</div>
	);
};

export default Main;
