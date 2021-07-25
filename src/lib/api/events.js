import { fetchData } from "./api";

// Get single cause
export const getEventBySlug = async (slug) => {
    const query = `
      query EventBySlug($id: ID!, $idType: EventIdType!) {
        event(idType: $idType, id: $id) {
            title
            slug
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
            id
            content
          }
      }
    `;

    const variables = {
        id: slug,
        idType: "URI"
    }

    const data = await fetchData(query, variables);
    return data;
}

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