import React from "react";
import "./App.css";

import EventTable from "./EventTable";
import LocationFilter from "./LocationFilter";
import json from "../eventlist";

class App extends React.Component {
	state = {
		allEvents: json.Items,
		cities: [...new Set(json.Items.map(el => el.VenueCity))].sort(),
		filteredEvents: json.Items,
	};

	filterEvents(val) {
		val === ""
			? this.setState({ filteredEvents: this.state.allEvents })
			: this.setState({
					filteredEvents: this.state.allEvents.filter(
						event => event.VenueCity === "Houston"
					),
			  });
		console.log(this.state.filteredEvents);
	}

	render() {
		return (
			<div className="eventContainer">
				<header className="eventHeader">
					<h2 className="eventTitle">Elton John Tickets</h2>

					<img
						className="artist-img"
						src="https://img.vggcdn.net/img/cat/4508/1/37.jpg"
						alt="Elton John"
					/>
				</header>
				<LocationFilter
					filterEvents={this.filterEvents}
					cities={this.state.cities}></LocationFilter>
				<EventTable filteredEvents={this.state.filteredEvents}></EventTable>
			</div>
		);
	}
}

export default App;
