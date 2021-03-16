import React from "react";

export default function CategoryItem({ title, count, img }) {
	return (
		<div className="cs-item set-bg">
			<img src={img} alt="" className="set-bg" />
			<div className="cs-text">
				<h5>{title}</h5>
				<span>{count} property</span>
			</div>
		</div>
	);
}
