import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '56825027-65265643f7aa1f6dd5a6771aa';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
