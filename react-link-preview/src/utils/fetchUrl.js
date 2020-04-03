/**
 * Função que adicions o CORS ANYWHERE para que o link possa ser acessado
 * do localhost de desenvolvimento do React
 */

import axios from 'axios';

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export default function fetchUrl(url) {
  
  return axios(CORS_PROXY + url).then(response => response.data);

}
