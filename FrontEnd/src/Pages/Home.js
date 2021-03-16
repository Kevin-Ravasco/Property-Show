import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import ChooseUs from "../Components/ChooseUs";
import PropertyList from "../Components/Properties/PropertyList";
import PropertyFilter from "../Components/PropertyFilter";
import SectionTitle from "../Components/SectionTitle";
import { PropertiesContext } from "../context";
import useFetch from "../customHooks";

export default function Home() {
	const fetchUrl = "http://127.0.0.1:8001/properties/";
	useFetch(fetchUrl);
	const context = useContext(PropertiesContext);
	let properties = context.latestProperty;
	const [rooms, setRooms] = useState(properties);

	const filterProperty = (id) => {
		if (id === "all") {
			setRooms(properties);
			return;
		}
		let filteredProperties = properties.filter(
			(property) => property.property_type.id === id
		);
		setRooms(filteredProperties);
		return;
	};

	useEffect(() => {
		setRooms(properties);
	}, [context.data]);

	return (
		<>
			<Banner page="Welcome to aler Properties" breadcrumb="" />
			<div className="container section-margin">
				<div className="row">
					<div className="col-lg-5">
						<SectionTitle title="Latest Property" />
					</div>
					<div className="col-lg-7">
						<PropertyFilter filterProperty={filterProperty} />
					</div>
				</div>
				<PropertyList rooms={rooms} />
			</div>
			<ChooseUs />
			<div className="container section-margin">
				<SectionTitle
					title="Find a place for you"
					text="Let us help you find a place suitable for you"
					classes="text-black"
				/>
			</div>

			<Categories />
		</>
	);
}
