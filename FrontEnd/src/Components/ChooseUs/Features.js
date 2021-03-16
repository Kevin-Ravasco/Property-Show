import React from "react";

export default function Features({ img, title, text }) {
	return (
		<div className="cf-item">
			<div className="cf-pic">
				<img src={img} alt={title} />
			</div>
			<div className="cf-text">
				<h5>{title}</h5>
				<p>{text}</p>
			</div>
		</div>
	);
}
