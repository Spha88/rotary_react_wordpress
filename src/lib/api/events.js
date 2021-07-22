import { fetchData } from "./api";

// Get all events
export const getEvents = async () => {
    const query = `
          query MyQuery {
              events(where: {orderby: {field: DATE, order: DESC}}) {
              edges {
                  node {
                  id
                  title
                  content
                  eventDetails {
                      backgroundImage {
                      sourceUrl
                      altText
                      }
                      dateAndTime
                      host
                      ticketPrice
                      venue
                      venueAddress
                  }
                  }
              }
              }
          }
      `;
    const data = await fetchData(query)
    return data;
}