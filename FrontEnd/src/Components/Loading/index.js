import React from "react";
import { Preloader, Oval } from "react-preloader-icon";

export default function Loading() {
	return (
		<div className="row my-10">
			<div className="col-2"></div>
			<div className="col-2"></div>
			<div className="col-2"></div>
			<div className="col-2">
				<Preloader
					use={Oval}
					size={64}
					strokeWidth={12}
					strokeColor="#00c89e"
					duration={800}
				/>
			</div>
			<div className="col-2"></div>
			<div className="col-2"></div>
		</div>
	);
}
