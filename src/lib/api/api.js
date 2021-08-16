import axios from 'axios';

export const fetchData = (query, variables = {}) => {
  return axios({
    method: 'post',
    url: 'https://rotary.netslate.co.za/api/graphql',
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