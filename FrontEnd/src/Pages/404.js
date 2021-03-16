import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";

export default function Error404() {
	return (
		<>
			<Banner page="404 Error" breadcrumb="Page not found" />
			<div className="container section-margin">
				<div className="row">
					<div className="col-lg-12 text-center">
						<div className="card">
							<div className="my-5">
								<h2 className="cs-title">404 Error</h2>
								<h5 className="cs-title text-danger my-3">
									The page could not be found
								</h5>
								<Link to="/">
									<button className="primary-btn">Go back home</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
