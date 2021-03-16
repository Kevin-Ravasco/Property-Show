import React, { useContext } from "react";
import { PropertiesContext } from "../../context";

export default function Title() {
	const { singleRoom } = useContext(PropertiesContext);
	const { status, name, price, city, location } = singleRoom;
	return (
		<div className="row">
			<div className="col-lg-6">
				<div className="pd-title">
					<div className="label">{status}</div>
					<div className="pt-price">
						Kshs.{price}
						<span>{status === "For Rent" && "/month"}</span>
					</div>
					<h3>{name}</h3>
					<p>
						<span className="icon_pin_alt"></span> {city}, {location}
					</p>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="pd-social">
					<a href="#">
						<i className="fa fa-mail-forward"></i>
					</a>
					<a href="#">
						<i className="fa fa-send"></i>
					</a>
					<a href="#">
						<i className="fa fa-heart"></i>
					</a>
					<a href="#">
						<i className="fa fa-mail-forward"></i>
					</a>
					<a href="#">
						<i className="fa fa-cloud-download"></i>
					</a>
				</div>
			</div>
		</div>
	);
}
