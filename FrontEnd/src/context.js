import React, { Component } from "react";

const PropertiesContext = React.createContext();

class PropertiesProvider extends Component {
	fetchUrl = "http://127.0.0.1:8001/properties/";

	state = {
		isLoading: true,
		isError: false,
		data: [],
		latestProperty: [],
		categories: [],
		singleRoomId: "",
		singleRoom: [],
	};

	componentDidMount() {
		fetch(this.fetchUrl)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ ...this.state, data });
			})
			.catch((error) => {
				this.setState({ ...this.state, isError: true });
			});
	}

	updateState = (data) => {
		this.setState({ ...this.state, ...data });
	};

	getSingleProperty = (id) => {
		const url = `http://127.0.0.1:8001/properties/${id}/`;
		this.setState({ ...this.state, singleRoomId: id, isLoading: true });
		fetch(url)
			.then((response) => {
				if (response.status >= 200 && response.status <= 299) {
					return response.json();
				} else {
					this.setState({ ...this.state, isLoading: false, isError: true });
					return;
				}
			})
			.then((data) => {
				this.setState({ ...this.state, singleRoom: data, isLoading: false });
			})
			.catch((error) => {
				this.setState({ ...this.state, isLoading: false, isError: true });
			});
	};

	render() {
		return (
			<PropertiesContext.Provider
				value={{
					...this.state,
					updateState: this.updateState,
					getSingleProperty: this.getSingleProperty,
				}}
			>
				{this.props.children}
			</PropertiesContext.Provider>
		);
	}
}

const PropertiesConsumer = PropertiesContext.Consumer;

export { PropertiesContext, PropertiesProvider, PropertiesConsumer };
