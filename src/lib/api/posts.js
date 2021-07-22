import { fetchData } from "./api";

// Get latest posts
export const getLatestPosts = async () => {
    const query = `
        query AllPosts {
          posts(first: 3, where: {orderby: {field: DATE, order: DESC}}) {
            nodes {
              date
              title
              slug
              content
              featuredImage {
                node {
                  sourceUrl(size: MEDIUM_LARGE)
                }
              }
            }
          }
        }
      `
    const data = await fetchData(query);
    return data;
}