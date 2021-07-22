import { fetchData } from "./api";

export const getSinglePage = async (slug) => {
  const query = `
    query PageBySlug($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        id
        title
        content
        extraDetails {
          presidentName
        }
        featuredImage {
          node {
            caption
            altText
            sourceUrl
          }
        }
      }
    }
  `;
  const variables = {
    id: slug,
    idType: 'URI'
  }

  const data = await fetchData(query, variables);
  return data;
}