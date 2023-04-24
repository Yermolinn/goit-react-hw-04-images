import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api';
const USER_KEY = '5326395-fa286140056880ef12df4a9f7'

const getImages = async (value, page = 1) => {
  try {
    const url = `/?q=${value}&page=${page}&key=${USER_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getImages;