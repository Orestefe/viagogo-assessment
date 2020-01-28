import React from "react";
import "./EventItem.css";

const EventItem = ({ event }) => {
	const { EventUrl, Day, Time, VenueCity, VenueCountryCode, MinPrice } = event;
	const { MonthName, DayOfMonth } = event.CalendarViewModel;
	const limitedStock = !event.HeadingTowardsLimitedStockMessage
		? ""
		: event.HeadingTowardsLimitedStockMessage;
	const lastDate = !event.IsLastDateInCity
		? ""
		: "Last available date in this city";
	return (
		<div className="eventItemContainer">
			<a className="urlRedirect" href={`https://viagogo.com/ve${EventUrl}`}>
				URL
			</a>
			<div className="col-3">
				<span className="event-text--md">
					{Day} {Time}
				</span>
				<span className="event-text--lg text--heavy">
					{MonthName.toUpperCase()} {DayOfMonth}
				</span>
			</div>
			<div className="col-8">
				<span className="event-text--md">{event.VenueName} </span>
				<span className="event-text--lg text--heavy">
					{VenueCity}, {VenueCountryCode}
				</span>
				<span className="event-text--sm text--heavy warning">
					{limitedStock}
				</span>
				<span className="event-text--sm text--heavy warning">{lastDate}</span>
			</div>
			<div className="col-1">
				<span>from</span>
				<span className="event-text--lg text--heavy">{MinPrice}</span>
			</div>
		</div>
	);
};

export default EventItem;
