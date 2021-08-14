import { fetchData } from "./api";

// Get all events
export const getMembers = async () => {
  const query = `
    query MyQuery {
        members {
          nodes {
            id
            slug
            memberDetails {
              names
              surname
              position
              profilePicture {
                id
                sourceUrl
                altText
              }
            }
            
          }
        }
      }
      `;
  const data = await fetchData(query)
  return data;
}