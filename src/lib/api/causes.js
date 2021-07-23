import { fetchData } from "./api";

// Get single cause
export const getSingleCause = async (slug) => {
  const query = `
    query CauseBySlug($id: ID!, $idType: CauseIdType!) {
      cause(idType: $idType, id: $id) {
        content
        id
        slug
        title
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
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
// get last 5 causes
export const getLastFiveCauses = async () => {
  const query = `
    query LastFiveCauses {
      causes(where: {orderby: {field: DATE, order: DESC}}, first: 5) {
        nodes {
          id
          slug
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          title
        }
      }
    }
  `;
  const data = await fetchData(query)
  return data;
}

// Get all causes
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