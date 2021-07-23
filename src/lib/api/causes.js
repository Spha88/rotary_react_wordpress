import { fetchData } from "./api";

// Get last three causes
export const getCauses = async () => {
  const query = `
    query LastThreeCauses {
      causes(last: 3, where: {orderby: {field: DATE, order: ASC}}) {
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

// Get last three causes
export const getAllCauses = async () => {
  const query = `
    query AllCauses {
      causes(where: {orderby: {field: DATE, order: ASC}}) {
        nodes {
          id
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          title
          slug
          content
        }
      }
    }
  `;
  const data = await fetchData(query)
  return data;
}