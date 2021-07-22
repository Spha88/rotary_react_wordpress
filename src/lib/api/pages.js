import { fetchData } from "./api";

// Get single Page using the slug as an id
export const getAboutPage = async () => {
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

// Get president page
export const getPresidentPage = async () => {
  const query = `
      query GetPresidentPage {
        page(id: "our-president", idType: URI) {
          extraDetails {
            presidentName
          }
          content
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    `
  const data = await fetchData(query);
  return data;
}