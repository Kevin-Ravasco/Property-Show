import React from "react";

import Features from "./Features";
import data from "./data";
import SectionTitle from "../SectionTitle";

export default function ChooseUs() {
	return (
		<section className="chooseus-section spad set-bg mb-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<SectionTitle
							title="Why choose us"
							text="Lorem Ipsum has been the industry’s standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book."
							classes="chooseus-text"
						/>
						<div className="chooseus-features">
							{data.map((item) => {
								const { id, img, title, text } = item;
								return (
									<Features key={id} img={img} title={title} text={text} />
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
