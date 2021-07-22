import { fetchData } from "./api";

// Get last three causes
export const getCauses = async () => {
  const query = `
    query LastThreeCauses {
      causes(last: 3, where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
          id
          slug
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          content
          title
        }
      }
    }
      `;
  const data = await fetchData(query)
  return data;
}