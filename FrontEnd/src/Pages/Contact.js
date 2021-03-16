import React from "react";
import Banner from "../Components/Banner";
import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";

export default function Contact() {
	return (
		<>
			<Banner page="Contact Us" breadcrumb="contact" />
			<ContactForm />
			<ContactInfo />
		</>
	);
}
