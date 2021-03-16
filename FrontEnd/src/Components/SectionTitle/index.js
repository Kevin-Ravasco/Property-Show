import React from "react";

export default function SectionTitle({ title, text, classes }) {
	if (text) {
		return (
			<div className={classes}>
				<div className="section-title">
					<h4>{title}</h4>
				</div>
				{text && <p>{text}</p>}
			</div>
		);
	}
	return (
		<>
			<div className="section-title">
				<h4>{title}</h4>
			</div>
			{text && <p>{text}</p>}
		</>
	);
}
