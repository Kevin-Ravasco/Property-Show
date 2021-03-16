import React, { useState } from "react";
import Alert from "./Alert";
import Loading from "../Loading";

export default function ContactForm() {
	const [loading, setLoading] = useState(false);
	const [contact, setContact] = useState({
		name: "",
		email: "",
		website: "",
		comment: "",
	});
	const [message, setMessage] = useState({
		showMsg: false,
		msgClass: "",
		msg: "",
	});

	// from django docs. To get csrftoken for POST requests
	function getCookie(name) {
		let cookieValue = null;
		if (document.cookie && document.cookie !== "") {
			const cookies = document.cookie.split(";");
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].trim();
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) === name + "=") {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}

	const SubmitData = () => {
		const url = "http://127.0.0.1:8001/create-contact/";
		const csrftoken = getCookie("csrftoken");
		const { name, email, website, comment } = contact;
		console.log(csrftoken);
		setLoading(true);
		console.log(
			JSON.stringify({
				name: name[0],
				email: email[0],
				website: website ? website[0] : "",
				comment: comment[0],
			})
		);
		fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				"X-CSRFToken": csrftoken,
			},
			body: JSON.stringify({
				name: name[0],
				email: email[0],
				website: website ? website[0] : "",
				comment: comment[0],
			}),
		}).then((response) => {
			console.log(response.status);
			if (response.status === 201) {
				setMessage({
					showMsg: true,
					msgClass: "alert-success",
					msg: "Thank you! Your message has been successfully sent.",
				});
				setContact({
					name: "",
					email: "",
					website: "",
					comment: "",
				});
			} else {
				setMessage({
					showMsg: true,
					msgClass: "alert-danger",
					msg: "An error occurred, please try again",
				});
			}
			setLoading(false);
		});
	};

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setContact({ ...contact, [name]: [value] });
	};

	const handleSubmit = (e) => {
		const { name, email, comment } = contact;
		e.preventDefault();
		if (name && email && comment) {
			SubmitData();
			return;
		} else {
			setMessage({
				showMsg: true,
				msgClass: "alert-danger",
				msg: "Please fill out the name, email and comment fields",
			});
		}
	};

	return (
		<section className="contact-form-section spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="cf-content">
							<div className="cc-title">
								<h4>Contact form</h4>
								<p>
									For any inquiries, comments, suggestions or any other info{" "}
									<br />
									contact us by filling the form bellow
								</p>
							</div>
							<form
								action="#"
								className="cc-form"
								onSubmit={(e) => handleSubmit(e)}
							>
								<div className="group-input">
									<input
										type="text"
										placeholder="Name"
										name="name"
										value={contact.name}
										onChange={(e) => handleChange(e)}
									/>
									<input
										type="text"
										placeholder="Email"
										name="email"
										value={contact.email}
										onChange={(e) => handleChange(e)}
									/>
									<input
										type="text"
										placeholder="Website"
										name="website"
										value={contact.website}
										onChange={(e) => handleChange(e)}
									/>
								</div>
								<textarea
									placeholder="Comment"
									name="comment"
									value={contact.comment}
									onChange={(e) => handleChange(e)}
								></textarea>
								<button type="submit" className="site-btn">
									Submit
								</button>
							</form>
						</div>
						{loading ? (
							<Loading />
						) : (
							message.showMsg && (
								<Alert message={message} setMessage={setMessage} />
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
