import axios from 'axios';

const APIGeneral = axios.create({ baseURL: 'http://ec2-100-26-219-1.compute-1.amazonaws.com/api/' });

export default APIGeneral;
