import React from "react";
import Banner from "../Components/Banner";
import data from "../Components/ChooseUs/data";
import aboutImg from "../img/about-us.jpg";

export default function About() {
	return (
		<>
			<Banner page="About Us" breadcrumb="about" />
			<section class="about-section spad">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<div class="about-text">
								<div class="at-title">
									<h3>Welcome to Aler REAL</h3>
									<p>
										Lorem Ipsum has been the industry’s standard dummy text ever
										since the 1500s, when an unknown printer took a galley of
										type.
									</p>
								</div>
								<div class="at-feature">
									{data.map((item) => {
										const { id, img, title, text } = item;
										return (
											<div class="af-item" key={id}>
												<div class="af-icon">
													<img src={img} alt="" />
												</div>
												<div class="af-text">
													<h6>{title}</h6>
													<p>{text}</p>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="about-pic set-bg">
								<img src={aboutImg} alt="about us" />
								<a
									href="https://www.youtube.com/watch?v=8EJ3zbKTWQ8"
									class="play-btn video-popup"
								>
									<i class="fa fa-play-circle"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
