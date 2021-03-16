import React, { useContext } from "react";
import { PropertiesContext } from "../../context";

import AgentCard from "./AgentCard";
import Facilities from "./Facilities";
import Images from "./Images";
import Overview from "./Overview";
import Title from "./Title";

export default function PropertyDetails() {
	const { singleRoom } = useContext(PropertiesContext);
	const { floor_plan } = singleRoom;

	if (!singleRoom) {
		return (
			<section className="property-details-section">
				<div className="row">
					<div className="col-md-12 text-center my-5">
						<h6 className="cs-title">
							The requestted property could not be found.
						</h6>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="property-details-section">
			<div className="container">
				<Images singleRoom={singleRoom} />
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-lg-8">
						<div className="pd-text">
							<Title />
							<Overview />
							<div className="pd-widget">
								<h4>Floor plans</h4>
								<img src={floor_plan} alt="floor plan" />
							</div>
							<div className="pd-widget">
								<h4>Nearest Facilities</h4>

								<Facilities />
							</div>
							<div className="pd-widget">
								<h4>Agent</h4>
								<AgentCard />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
