import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '708b2b7fdf744f169071703055ae205e',
  },
});
