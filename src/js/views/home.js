import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>STAR WARS</h1>
		<div>
			<Link to="/planets">
				<button className="btn btn-primary">Ir a Planets</button>
			</Link>
		</div>
		<h1 />
		<div>
			<Link to="/persons">
				<button className="btn btn-primary">Ir a Persons</button>
			</Link>
		</div>
	</div>
);
