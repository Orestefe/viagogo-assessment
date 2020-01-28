import React from "react";
import EventItem from "./EventItem";

// Dynamically renders list of events from the filtered events list
const EventTable = ({ filteredEvents }) => {
	const renderedEvents = filteredEvents.map(event => {
		return <EventItem key={event.EventId} event={event}></EventItem>;
	});

	return (
		<div
			style={{
				border: "1px solid rgb(230, 233, 235)",
				maxWidth: "900px",
				margin: "0 auto",
				zIndex: "1",
			}}>
			{renderedEvents}
		</div>
	);
};

export default EventTable;
