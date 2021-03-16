import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import links from "../../links";
import OffCanvas from "./OffCanvas";

export default function Navbar() {
	const [showNavLinks, setShowNavLinks] = useState(false);
	return (
		<>
			<OffCanvas show={showNavLinks} setShow={setShowNavLinks} />
			<header className="header-section">
				<div className="hs-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-2">
								<div className="logo">
									<Link to="/">
										<img src={Logo} alt="" />
									</Link>
								</div>
							</div>
							<div className="col-lg-10">
								<div className="ht-widget">
									<ul>
										<li>
											<i className="icon_mail_alt"></i> Aler.support@gmail.com
										</li>
										<li>
											<i className="fa fa-mobile-phone"></i> 125-711-811{" "}
											<span>125-668-886</span>
										</li>
									</ul>
									<a href="facebook.com/" className="hw-btn">
										Submit property
									</a>
								</div>
							</div>
						</div>
						<div className="canvas-open">
							<span
								className="icon_menu"
								onClick={() => setShowNavLinks(!showNavLinks)}
							></span>
						</div>
					</div>
				</div>
				<div className="hs-nav">
					<div className="container">
						<div className="row">
							<div className="col-lg-9">
								<nav className="nav-menu">
									<ul>
										{links.map((link) => {
											return (
												<li className="" key={link.id}>
													<Link to={link.to}>{link.name}</Link>
												</li>
											);
										})}
									</ul>
								</nav>
							</div>
							<div className="col-lg-3">
								<div className="hn-social">
									<a href="facebook.com/">
										<i className="fa fa-facebook"></i>
									</a>
									<a href="facebook.com/">
										<i className="fa fa-twitter"></i>
									</a>
									<a href="facebook.com/">
										<i className="fa fa-youtube-play"></i>
									</a>
									<a href="facebook.com/">
										<i className="fa fa-instagram"></i>
									</a>
									<a href="facebook.com/">
										<i className="fa fa-pinterest-p"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
