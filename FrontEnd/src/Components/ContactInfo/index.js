import React from "react";

export default function ContactInfo() {
	return (
		<section className="contact-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-info">
							<div className="ci-item">
								<div className="ci-icon">
									<i className="fa fa-map-marker"></i>
								</div>
								<div className="ci-text">
									<h5>Address</h5>
									<p>
										160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161
									</p>
								</div>
							</div>
							<div className="ci-item">
								<div className="ci-icon">
									<i className="fa fa-mobile"></i>
								</div>
								<div className="ci-text">
									<h5>Phone</h5>
									<ul>
										<li>125-711-811</li>
										<li>125-668-886</li>
									</ul>
								</div>
							</div>
							<div className="ci-item">
								<div className="ci-icon">
									<i className="fa fa-headphones"></i>
								</div>
								<div className="ci-text">
									<h5>Support</h5>
									<p>Support.aler@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="cs-map">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735515.5813275519!2d-80.41163541934742!3d43.93644386501528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882a55bbf3de23d7%3A0x3ada5af229b47375!2sMono%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1583262687289!5m2!1sen!2sbd"
        height="450"
        style="border:0;"
        allowfullscreen=""
    ></iframe>
</div> */}
		</section>
	);
}
