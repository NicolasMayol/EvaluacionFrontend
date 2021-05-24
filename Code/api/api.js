import axios from 'axios';

export const Users = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com/'
});
