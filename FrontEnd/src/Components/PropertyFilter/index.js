import React, { useContext } from "react";
import { PropertiesContext } from "../../context";

export default function PropertyFilter({ filterProperty }) {
	let context = useContext(PropertiesContext);
	const { categories } = context;

	return (
		<div className="property-controls">
			<ul>
				<li onClick={() => filterProperty("all")}>All</li>
				{categories.map((category) => {
					const { id, name } = category;
					return (
						<li key={id} onClick={() => filterProperty(id)}>
							{name}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
