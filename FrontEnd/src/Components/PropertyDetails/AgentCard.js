import React, { useContext } from "react";
import { PropertiesContext } from "../../context";

export default function AgentCard() {
	const { singleRoom } = useContext(PropertiesContext);
	const { agent } = singleRoom;
	const { image, name, title, phone, description } = agent;

	return (
		<div className="pd-agent">
			<div className="agent-pic">
				<img src={image} alt="" />
			</div>
			<div className="agent-text">
				<div className="at-title">
					<h6>{name}</h6>
					<span>{title}</span>
					<button className="primary-btn">View profile</button>
				</div>
				<p>{description}</p>
				<div className="at-option">
					<div className="at-number">{phone}</div>
					<div className="at-social">
						<a href="#">
							<i className="fa fa-facebook"></i>
						</a>
						<a href="#">
							<i className="fa fa-twitter"></i>
						</a>
						<a href="#">
							<i className="fa fa-envelope-o"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
