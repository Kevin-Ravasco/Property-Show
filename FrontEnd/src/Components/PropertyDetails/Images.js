import React from "react";
// import img1 from "../../img/property/slider/ps-1.jpg";

export default function Images({ singleRoom }) {
	const { image1, image2, image3 } = singleRoom;

	return (
		<div className="row mb-5">
			<div className="col-md-6">
				<img className="big-img" src={image1} alt="js" />
			</div>
			<div className="col-md-6">
				<div className="row">
					<div className="col-md-12 col-12">
						<img className="small-img" src={image2} alt="js" />
					</div>
					<div className="col-md-12 col-12 mt-1">
						<img className="small-img" src={image3} alt="js" />
					</div>
				</div>
			</div>
		</div>
	);
}
