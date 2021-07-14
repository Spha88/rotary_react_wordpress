import axios from 'axios';

const fetchData = (query, variables = {}) => {
    return axios({
        method: 'post',
        url: 'http://localhost/wordpress_rotary/graphql',
        data: {
            query: query,
            variables: variables
        }
    }).then(res => {
        return res.data.data
    }).catch(error => {
        return false;
    })
}

// Get single post using the slug as an id
export const getAboutPage = async (id) => {
    const query = `
        query MyQuery {
            page(idType: URI, id: "about-page") {
                id
                title
                content
                featuredImage {
                    node {
                      sourceUrl
                    }
                }
            }
        }
    `;

    const data = await fetchData(query)
    return data;
}

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

// get all causes
export const getCauses = async () => {
    const query = `
    query MyQuery {
        causes {
          edges {
            node {
              id
              featuredImage {
                node {
                    sourceUrl
                    altText
                }
              }
              content
              title
            }
          }
        }
      }
    `;
    const data = await fetchData(query)
    return data;
}