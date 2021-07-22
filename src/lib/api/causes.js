import { fetchData } from "./api";

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