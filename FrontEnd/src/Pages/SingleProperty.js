import React, { useContext, useEffect, useState } from "react";
import Banner from "../Components/Banner";
import PropertyDetails from "../Components/PropertyDetails";
import { PropertiesContext } from "../context";
import Loading from "../Components/Loading";

export default function SingleProperty() {
	const {
		singleRoomId,
		updateState,
		isLoading,
		isError,
		singleRoom,
		getSingleProperty,
	} = useContext(PropertiesContext);
	let propertyId = singleRoomId;
	if (!propertyId) {
		propertyId = window.location.pathname.replace("/properties/", "");
	}

	useEffect(() => {
		updateState({ isLoading: true });
		getSingleProperty(propertyId);
		// fetch(url)
		// 	.then((response) => {
		// 		if (response.status >= 200 && response.status <= 299) {
		// 			return response.json();
		// 		} else {
		// 			updateState({ isLoading: false, isError: true });
		// 			return;
		// 		}
		// 	})
		// 	.then((data) => {
		// 		updateState({ singleRoom: data, isLoading: false });
		// 	})
		// 	.catch((error) => {
		// 		updateState({ isLoading: false, isError: true });
		// 	});
	}, []);

	return (
		<>
			<Banner
				page="property details"
				breadcrumb="property"
				breadcrumb2="details"
			/>
			{/* <isLoading /> */}
			{isLoading ? <Loading /> : <PropertyDetails />}
		</>
	);
}
