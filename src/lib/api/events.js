import { fetchData } from "./api";

// Get all events
export const getEvents = async () => {
    const query = `
        query MyQuery {
            events(where: {orderby: {field: DATE, order: DESC}}) {
            nodes {
                content
                id
                slug
                eventDetails {
                dateAndTime
                backgroundImage {
                    sourceUrl
                    altText
                }
                host
                ticketPrice
                venue
                venueAddress
                }
                title
            }
            }
        }
      `;
    const data = await fetchData(query)
    return data;
}