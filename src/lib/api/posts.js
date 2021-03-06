import { fetchData } from "./api";

// Get latest posts
export const getLatestPosts = async () => {
  const query = `
        query AllPosts {
          posts(first: 3, where: {orderby: {field: DATE, order: DESC}}) {
            nodes {
              id
              slug
              date
              title
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

// Get latest posts
export const getLastFivePosts = async () => {
  const query = `
        query LastFivePosts {
          posts(first: 5, where: {orderby: {field: DATE, order: DESC}}) {
            nodes {
              id
              slug
              date
              title
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

// Get single post using the slug as an id
export const getSinglePost = async (id) => {
  const query = `
    fragment PostFields on Post {
      title
      excerpt
      slug
      id
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        author {
          node {
            lastName
            firstName
          }
        }
      }
    }
  `;
  const variables = {
    id: id,
    idType: 'SLUG'
  }

  const data = await fetchData(query, variables)
  return data.post;
}

// Get all posts
export const getAllPosts = async () => {
  const query = `
    query AllPosts {
      posts {
        nodes {
          excerpt
          id
          title
          date
          slug
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `
  const data = await fetchData(query);
  return data;
}