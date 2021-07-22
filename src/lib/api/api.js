import axios from 'axios';

export const fetchData = (query, variables = {}) => {
  return axios({
    method: 'post',
    url: 'http://localhost/wordpress_rotary/graphql',
    data: {
      query: query,
      variables: variables
    }
  }).then(res => {
    return res.data.data
  }).catch(error => {
    return false;
  })
}