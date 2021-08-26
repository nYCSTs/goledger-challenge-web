import axios from 'axios';
import baseURL from '../../Constants/baseUrl';

export const APIArtist = axios.create({ baseURL });
export const APIAlbum = axios.create({ baseURL });
