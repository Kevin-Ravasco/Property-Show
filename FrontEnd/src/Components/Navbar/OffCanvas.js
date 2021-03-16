import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import links from "../../links";

export default function OffCanvas({ show, setShow }) {
	return (
		<>
			<div
				className={`${
					show ? "offcanvas-menu-overlay active" : "offcanvas-menu-overlay"
				}`}
			></div>
			<div
				className={`${
					show
						? "offcanvas-menu-wrapper show-offcanvas-menu-wrapper"
						: "offcanvas-menu-wrapper"
				}`}
			>
				<div className="canvas-close">
					<span className="icon_close" onClick={() => setShow(false)}></span>
				</div>
				<div className="logo">
					<a href="./index.html">
						<img src={Logo} alt="logo" />
					</a>
				</div>
				<div id="mobile-menu-wrap">
					<div className="slicknav_menu">
						<a
							href="#"
							className="slicknav_btn slicknav_collapsed"
							style={{ outline: "none" }}
						>
							<span className="slicknav_menutxt">MENU</span>
							<span className="slicknav_icon">
								<span className="slicknav_icon-bar"></span>
								<span className="slicknav_icon-bar"></span>
								<span className="slicknav_icon-bar"></span>
							</span>
						</a>
						<nav
							className="slicknav_nav slicknav_hidden"
							aria-hidden="true"
							role="menu"
							style={{ display: "none" }}
						>
							<ul>
								{links.map((link) => {
									return (
										<Link to={link.to} key={link.id} role="menuitem">
											{link.name}
										</Link>
									);
								})}
							</ul>
						</nav>
					</div>
				</div>
				<div className="om-widget">
					<ul>
						<li>
							<i className="icon_mail_alt"></i> Aler.support@gmail.com
						</li>
						<li>
							<i className="fa fa-mobile-phone"></i> 125-711-811{" "}
							<span>125-668-886</span>
						</li>
					</ul>
					<a href="#" className="hw-btn">
						Submit property
					</a>
				</div>
				<div className="om-social">
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
		</>
	);
}
