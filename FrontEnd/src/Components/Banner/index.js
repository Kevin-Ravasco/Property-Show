import React from "react";
import { Link } from "react-router-dom";
// import BannerImg from "../../img/breadcrumb-bg.jpg";

export default function Banner({ page, breadcrumb, breadcrumb2 }) {
	return (
		<section
			className="breadcrumb-section spad set-bg"
			// data-setbg="img/breadcrumb-bg.jpg"
		>
			{/* <img src={BannerImg} alt="banner" /> */}
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="breadcrumb-text">
							<h4>{page}</h4>
							<div className="bt-option">
								<Link to="/">
									<i className="fa fa-home"></i> Home
								</Link>
								{breadcrumb && <Link to="">{breadcrumb}</Link>}
								{breadcrumb2 && <span>{breadcrumb2}</span>}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
