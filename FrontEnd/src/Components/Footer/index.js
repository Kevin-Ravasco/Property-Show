import React from "react";

export default function Footer() {
	return (
		<footer className="footer-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="fs-about">
							<div className="fs-logo">
								<a href="#">
									<img src="img/f-logo.png" alt="" />
								</a>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua ut
								aliquip ex ea
							</p>
							<div className="fs-social">
								<a href="#">
									<i className="fa fa-facebook"></i>
								</a>
								<a href="#">
									<i className="fa fa-twitter"></i>
								</a>
								<a href="#">
									<i className="fa fa-youtube-play"></i>
								</a>
								<a href="#">
									<i className="fa fa-instagram"></i>
								</a>
								<a href="#">
									<i className="fa fa-pinterest-p"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-sm-6">
						<div className="fs-widget">
							<h5>Help</h5>
							<ul>
								<li>
									<a href="#">Privacy Policy</a>
								</li>
								<li>
									<a href="#">Contact Support</a>
								</li>
								<li>
									<a href="#">Knowledgebase</a>
								</li>
								<li>
									<a href="#">Careers</a>
								</li>
								<li>
									<a href="#">FAQs</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-sm-6">
						<div className="fs-widget">
							<h5>Links</h5>
							<ul>
								<li>
									<a href="#">Contact</a>
								</li>
								<li>
									<a href="#">Create Property</a>
								</li>
								<li>
									<a href="#">My Properties</a>
								</li>
								<li>
									<a href="#">Register</a>
								</li>
								<li>
									<a href="#">Login</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fs-widget">
							<h5>Newsletter</h5>
							<p>Deserunt mollit anim id est laborum.</p>
							<form action="#" className="subscribe-form">
								<input type="text" placeholder="Email" />
								<button type="submit" className="site-btn">
									Subscribe
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
