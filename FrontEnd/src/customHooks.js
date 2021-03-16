import { useEffect, useContext } from "react";
import { PropertiesContext } from "./context";

export default function useFetch(fetchUrl) {
	const { updateState, latestProperty } = useContext(PropertiesContext);

	useEffect(() => {
		fetch(fetchUrl)
			.then((response) => response.json())
			.then((data) => {
				updateState({
					// ...context,
					isLoading: false,
					isError: false,
					latestProperty:
						latestProperty.length > 0
							? latestProperty
							: data.results.slice(0, 6),
					data,
				});
			})
			.catch((error) => {
				updateState({
					// ...context,
					isLoading: false,
					isError: true,
				});
			});
	}, [fetchUrl]);

	return useContext(PropertiesContext);
}
