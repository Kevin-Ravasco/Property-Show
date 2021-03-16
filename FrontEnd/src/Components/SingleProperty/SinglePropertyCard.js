import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PropertiesContext } from "../../context";
// import PropertyImg from "../../img/property/property-2.jpg";

export default function SinglePropertyCard(room, link) {
	const {
		id,
		name,
		price,
		image1,
		status,
		city,
		location,
		size,
		bathrooms,
		bedrooms,
		parking,
		agent,
	} = room.room;
	const { getSingleProperty } = useContext(PropertiesContext);

	return (
		<div className="property-item">
			<div className="pi-pic set-bg">
				<Link to={`properties/${id}`}>
					<img
						src={image1}
						alt={name}
						className="pi-pic"
						onClick={() => getSingleProperty(id)}
					></img>
				</Link>
				<div className={status === "For Sale" ? "label c-red" : "label"}>
					{status}
				</div>
			</div>
			<div className="pi-text">
				<div className="pt-price">Kshs. {price}</div>
				<h5>
					<Link to={`properties/${id}`} onClick={() => getSingleProperty(id)}>
						{name}
					</Link>
				</h5>
				<p>
					<span className="icon_pin_alt"></span> {city}, {location}
				</p>
				<ul>
					<li>
						<i className="fa fa-object-group"></i> {size}
					</li>
					<li>
						<i className="fa fa-bathtub"></i> {bathrooms}
					</li>
					<li>
						<i className="fa fa-bed"></i> {bedrooms}
					</li>
					<li>
						<i className="fa fa-automobile"></i> {parking}
					</li>
				</ul>
				<div className="pi-agent">
					<div className="pa-item">
						<div className="pa-info">
							<img src={agent.image} alt="" />
							<h6>{agent.name}</h6>
						</div>
						<div className="pa-text">{agent.phone}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
