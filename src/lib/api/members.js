import { fetchData } from "./api";

export const getSingleMember = async (id) => {
  const query = `
  query MemberBySlug($id: ID!, $idType: MemberIdType!) {
    member(idType: $idType, id: $id) {
        id
        memberDetails {
          names
          surname
          title
          position
          joiningDate
          profilePicture {
            altText
            sourceUrl
          }
          rotaryBio
        }
      }
  }
  `;
  const variables = {
    id: id,
    idType: 'SLUG'
  }

  const data = await fetchData(query, variables)
  return data.member;
}

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