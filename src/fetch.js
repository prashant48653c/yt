import axios from 'axios';
import { useContext } from 'react'
import { AppContext } from './App'






const API_URL = 'https://youtube-v31.p.rapidapi.com';
const API_KEY = '02eb3b808fmsh2bd2df67b501486p12766cjsne020a44fb8cf';

const options = {

  url: API_URL,
  params: {

    part: 'id,snippet',
    type: 'video',

    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
  try {
    // console.log("fetchdata ran")
    const { data } = await axios.get(`${API_URL}/${url}`, options)
    return data
  } catch (error) {
    console.error(error);
  }
}

