import axios from 'axios';

const KEY = '40817226-5cbcf23b486840d855816afe8';
const URL = 'https://pixabay.com/api/';

// export async function getAllImages(textSearch, page, perPage) {
//   const url = `${URL}?key=${KEY}&q=${textSearch}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal`;
//   const response = await axios.get(url);
//   return response.data;
// }

export const getAllImages = async (searchText, page) => {
  try {
    const response = await axios.get(`${URL}`, {
      params: {
        key: KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        q: searchText,
        page: page,
        per_page: 12,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(
        `Oops... there are no ${searchText} images matching your search...`
      );
    }
  } catch (error) {
    throw new Error(
      `Oops... there was an error fetching the images: ${error.message}`
    );
  }
};

// export const getAllImages = (searchText, page, perPage) => {
//   return fetch(
//     `${URL}?key=${KEY}&image_type=photo&orientation=horizontal&q=${searchText}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(
//       new Error(
//         `Oops... there are no ${searchText} images matching your search... `
//       )
//     );
//   });
// };

// const instance = axios.create({
//   baseURL: 'https://pixabay.com/api',
//   params: {
//     key: '40817226-5cbcf23b486840d855816afe8',

//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: 12,
//   },
// });

// export const getAllImages = async (textSearch, page) => {
//   const response = await instance.get('/', {
//     params: {
//       q: textSearch,
//       page: page,
//     },
//   });
//   return response.data;
// };
