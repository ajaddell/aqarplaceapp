import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'd95c81e6d5msh4a27bc9f7521861p10ef25jsn707ad40b194f'
    }
  });
    
  return data;
}