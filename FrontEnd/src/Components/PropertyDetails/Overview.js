import React, { useContext, useState } from "react";
import { PropertiesContext } from "../../context";

export default function Overview() {
	const [tab, setTab] = useState("overview");
	const { singleRoom } = useContext(PropertiesContext);
	const { description } = singleRoom;

	return (
		<div className="pd-board">
			<div className="tab-board">
				<ul className="nav nav-tabs" role="tablist">
					<li className="nav-item">
						<button
							className={`nav-link ${tab === "overview" && "active"}`}
							onClick={() => {
								setTab("overview");
							}}
						>
							Overview
						</button>
					</li>
					<li className="nav-item">
						<button
							className={`nav-link ${tab === "description" && "active"}`}
							onClick={() => {
								setTab("description");
							}}
						>
							Description
						</button>
					</li>
				</ul>
				<div className="tab-content">
					{tab === "description" ? (
						<Description tab={tab} description={description} />
					) : (
						<Summary tab={tab} singleRoom={singleRoom} />
					)}
				</div>
			</div>
		</div>
	);
}

function Summary({ tab, singleRoom }) {
	const {
		id,
		property_type,
		price,
		status,
		agent,
		size,
		rooms,
		bedrooms,
		bathrooms,
		parking,
	} = singleRoom;
	return (
		<div className={`tab-pane ${tab === "overview" && "active"}`}>
			<div className="tab-details">
				<ul className="left-table">
					<li>
						<span className="type-name">Property Type</span>
						<span className="type-value">{property_type.name}</span>
					</li>
					<li>
						<span className="type-name">Property ID</span>
						<span className="type-value">#{id}</span>
					</li>
					<li>
						<span className="type-name">Price</span>
						<span className="type-value">
							$ {price} {status === "For Rent" && "/month"}
						</span>
					</li>
					<li>
						<span className="type-name">Year Built</span>
						<span className="type-value">2019</span>
					</li>
					<li>
						<span className="type-name">Contract type</span>
						<span className="type-value">{status}</span>
					</li>
					<li>
						<span className="type-name">Agent</span>
						<span className="type-value">{agent.name}</span>
					</li>
				</ul>
				<ul className="right-table">
					<li>
						<span className="type-name">Home Area</span>
						<span className="type-value">{size} sqft</span>
					</li>
					<li>
						<span className="type-name">Rooms</span>
						<span className="type-value">{rooms}</span>
					</li>
					<li>
						<span className="type-name">Bedrooms</span>
						<span className="type-value">{bedrooms}</span>
					</li>
					<li>
						<span className="type-name">Bathrooms</span>
						<span className="type-value">{bathrooms}</span>
					</li>
					<li>
						<span className="type-name">Garages</span>
						<span className="type-value">{parking}</span>
					</li>
					<li>
						<span className="type-name">Parking lots</span>
						<span className="type-value">{parking}</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

function Description({ tab, description }) {
	return (
		<div className={`tab-pane ${tab === "description" && "active"}`}>
			<div className="tab-desc">
				<p>{description}</p>
			</div>
		</div>
	);
}
