import React, { useContext, useEffect } from "react";
import Banner from "../Components/Banner";
import Pagination from "../Components/Pagination";
import PropertyList from "../Components/Properties/PropertyList";
import SearchFilter from "../Components/PropertySearchFilter";
import SectionTitle from "../Components/SectionTitle";
import { PropertiesContext } from "../context";
import useFetch from "../customHooks";

export default function Properties() {
	const fetchUrl = "http://127.0.0.1:8001/properties/";
	useFetch(fetchUrl);
	const context = useContext(PropertiesContext);
	const rooms = context.data.results;

	useEffect(() => {}, [context.data]);

	return (
		<>
			<Banner page="properties" breadcrumb="properties" />
			{/* <SearchFilter /> */}
			<section className="property-section latest-property-section spad">
				<div className="container">
					<SectionTitle title="Available Property" />
					<PropertyList rooms={rooms} />
				</div>
				{context.data.next || context.data.previous ? (
					<Pagination />
				) : (
					<div></div>
				)}
			</section>
		</>
	);
}
