import React from "react";

export default function SearchFilter() {
	return (
		<section className="search-section spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="section-title">
							<h4>Where would you rather live?</h4>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="change-btn">
							<div className="cb-item">
								<label htmlFor="cb-rent" className="active">
									For Rent
									<input type="radio" id="cb-rent" />
								</label>
							</div>
							<div className="cb-item">
								<label htmlFor="cb-sale">
									For Sale
									<input type="radio" id="cb-sale" />
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className="search-form-content">
					<form action="#" className="filter-form">
						<select className="sm-width">
							<option value="">Chose The City</option>
						</select>
						<select className="sm-width">
							<option value="">Location</option>
						</select>
						<select className="sm-width">
							<option value="">Property Status</option>
						</select>
						<select className="sm-width">
							<option value="">Property Type</option>
						</select>
						<select className="sm-width">
							<option value="">No Of Bedrooms</option>
						</select>
						<select className="sm-width">
							<option value="">No Of Bathrooms</option>
						</select>
						<div className="room-size-range-wrap sm-width">
							<div className="price-text">
								<label htmlFor="roomsizeRange">Size:</label>
								<input type="text" id="roomsizeRange" />
							</div>
							<div id="roomsize-range" className="slider"></div>
						</div>
						<div className="price-range-wrap sm-width">
							<div className="price-text">
								<label htmlFor="priceRange">Price:</label>
								<input type="text" id="priceRange" />
							</div>
							<div id="price-range" className="slider"></div>
						</div>
						<button type="button" className="search-btn sm-width">
							Search
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
