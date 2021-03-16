import React, { useContext, useEffect, useState } from "react";
import { PropertiesContext } from "../../context";
import useFetch from "../../customHooks";

export default function Pagination() {
	const context = useContext(PropertiesContext);
	const { count, next, previous } = context.data;
	const [pageNumber, setPageNumber] = useState(1);

	const getPaginationData = (fetchUrl, action) => {
		const { updateState } = context;

		updateState({
			...context,
			isLoading: true,
			isError: false,
		});

		fetch(fetchUrl)
			.then((response) => response.json())
			.then((data) => {
				updateState({
					...context,
					isLoading: false,
					isError: false,
					data,
				});
			})
			.catch((error) => {
				updateState({
					...context,
					isLoading: false,
					isError: true,
				});
			});

		if (action === "previous") {
			setPageNumber(pageNumber - 1);
		} else if (action === "next") {
			setPageNumber(pageNumber + 1);
		}
	};

	return (
		<div className="col-lg-12">
			<div className="property-pagination">
				{previous && (
					<button
						className="icon"
						onClick={() => getPaginationData(previous, "previous")}
					>
						<span className="arrow_left"></span>
					</button>
				)}
				<button>
					{pageNumber} /{Math.floor(count / 6)}
				</button>
				{next && (
					<button
						className="icon"
						onClick={() => getPaginationData(next, "next")}
					>
						<span className="arrow_right"></span>
					</button>
				)}
			</div>
		</div>
	);
}
