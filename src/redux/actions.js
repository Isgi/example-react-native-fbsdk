import axios from 'axios';
// import { API_URL } from 'react-native-dotenv';

export const servicePost = (service, body, endPoint = null) => {
  if (!endPoint) {
    endPoint = service;
  }
  console.log(`${API_URL}/${endPoint}`);
  //define request
  const request = axios({
    method: 'POST',
    url: `${API_URL}/${endPoint}`,
    data: body,
    headers: {
      'Content-Type': 'application/json'
    },
    json: true
  })
  return {
    type: `${service.toUpperCase()}_CREATE`,
    payload: request,
    service: service.toUpperCase(),
  }
}

export const serviceSet = (service, value) => {
  return {
    type: `${service.toUpperCase()}_SET`,
    payload: value,
    service: service.toUpperCase(),
  }
}
