import React, { useState, useContext, useEffect } from "react";
import { PropertiesContext } from "../../context";
import Loading from "../Loading";
import CategoryItem from "./CategoryItem";
// import data from "./data";

export default function Categories() {
	const [loading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	let context = useContext(PropertiesContext);
	const url = "http://127.0.0.1:8001/property-types/";

	useEffect(() => {
		const { updateState } = context;
		fetch(url)
			.then((response) => {
				if (response.status >= 200 && response.status <= 299) {
					return response.json();
				} else {
					setLoading(false);
					setIsError(true);
					return;
				}
			})
			.then((data) => {
				updateState({ categories: data.results });
				// updateState({ ...context, categories: data.results });
				setLoading(false);
			});
	}, []);

	if (isError) {
		return (
			<div className="row">
				<h5>An error occurred...</h5>
			</div>
		);
	}

	if (loading) {
		return <Loading />;
	}

	return (
		<section className="categories-section mb-10">
			<div className="cs-item-list">
				{context.categories.map((item) => {
					const { id, image, name } = item;
					return <CategoryItem key={id} img={image} title={name} count={200} />;
				})}
			</div>
		</section>
	);
}
