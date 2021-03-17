import React from "react";
import { Link } from "react-router-dom";

export const Persons = () => {
	return (
		<div className="text-center mt-5">
			<h1 className="display-3">Persons</h1>
			<Link to="/">
				<img
					width={400}
					height={300}
					src="https://www.projectcasting.com/wp-content/uploads/2018/09/star-wars-696x400.jpg"
					alt="People"
				/>
			</Link>
		</div>
	);
};
