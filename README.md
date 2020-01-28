# ViaGoGo Interview Task
 -[Live Demo](https://orestefe-viagogo.netlify.com)
## Part 1

- Given the javascript object containing event data, built a page that displays a list of events for one artist.
- Update the design to show the user all the important information that a customer would want to know when deciding on which event to go to.
  - Important information:
    1. Event Name / Artist
    2. Event Date / Time (Date, Day, Time, Month)
    3. Event Venue & City
    4. Event Starting Price
    5. Event URL for purchasing tickets
    6. Event Ticket Inventory to warn customers of low remaining stock

## Part 2

- Design and implement a filter that will allow users to filter by location. The filter should have a full list of locations where all locations are visible and allows the user to select a location.

## Part 3

- Tell us about the possible reasons that the filter your implemented in part 2 did not help the customer experience.

  - While working on the filter component I put myself in the customers shoes and imagined a couple scenarios that would affect my experience while using the application. For starters, while the list of locations from the data set wasn't too lengthy, I would imagine that for an international artist such as Elton John, the list would contain a significant amount of cities. If I were the user and I had to scroll through a list of 100+ cities it would negatively affect my experience and I might even consider using a competitor's site. Also, while the filter does have a search feature to locate specific cities, they may also want to look for events in neighboring locations which my search feature does not account for.

- What could you change to improve the filter experience, and why do you think it would be better for the customer?

  - I believe there are a couple different approaches that we could take with the filter component to improve the user's experience. To begin, we could ask for the user's location and within the filter we could create an option group that lists locations near them or within their country giving them a more tailored experience. We could also group the locations by specific country or state depending on if the event is part of an international tour. This will allow the user to find locations easily based on geography, instead of searching through an alphabetical list of locations.
