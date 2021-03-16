import React, { useContext, useEffect } from "react";
import { PropertiesContext } from "../../context";
import Loading from "../Loading";
import useFetch from "../../customHooks";
import SinglePropertyCard from "../SingleProperty/SinglePropertyCard";

export default function PropertyList({ rooms }) {
	const { isLoading, data } = useContext(PropertiesContext);
	// const fetchUrl = "http://127.0.0.1:8001/properties/";
	// useFetch(fetchUrl);

	useEffect(() => {}, [data]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<div className="row">
				{rooms.length > 0 ? (
					rooms.map((property) => {
						return (
							<div className="col-lg-4 col-6 col-md-6" key={property.id}>
								<SinglePropertyCard room={property} />
							</div>
						);
					})
				) : (
					<div className="col-md-12 text-center my-5">
						<h6 className="cs-title">No properties to display...</h6>
					</div>
				)}
			</div>
		</>
	);
}
