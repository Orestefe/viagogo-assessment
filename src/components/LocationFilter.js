import React, { Component, Fragment } from "react";
import Select from "react-select";

const customStyles = {
	container: (provided, state) => ({
		...provided,
		maxWidth: "900px",
		margin: "0 auto",
		marginTop: "1rem",
		marginBottom: "1rem",
	}),
};

export default class LocationFilter extends Component {
	state = {
		isClearable: true,
		isSearchable: true,
		searchValue: "",
	};

	toggleSearchable = () =>
		this.setState(state => ({ isSearchable: !state.isSearchable }));
	render() {
		let cityOptions = this.props.cities.map(city => {
			return { value: city, label: city };
		});
		const { isSearchable, isClearable } = this.state;
		return (
			<Fragment>
				<Select
					defaultInputValue=""
					closeMenuOnSelect={true}
					styles={customStyles}
					className="basic-single"
					classNamePrefix="select"
					isClearable={isClearable}
					isSearchable={isSearchable}
					name="city"
					options={cityOptions}
				/>
			</Fragment>
		);
	}
}
