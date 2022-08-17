const SERVER_HOST='http://139.162.63.46:4012';
const REGISTER_USER=`${SERVER_HOST}/users`;
const GET_REGISTRATION_LIST = `${SERVER_HOST}/users`;
const LOGIN_USER =  `${SERVER_HOST}/users/login`;
const ADD_ITEM = `${SERVER_HOST}/itinerary-items`;
const GET_ITEM  = `${SERVER_HOST}/itinerary-items`;
const USER_PROFILE =`${SERVER_HOST}/users/me`;
const EDIT_USER = `${SERVER_HOST}/users`;
export const config = {
  REGISTER_USER,
  SERVER_HOST,
  LOGIN_USER,
  ADD_ITEM,
  GET_ITEM,
  USER_PROFILE,
  EDIT_USER,
  GET_REGISTRATION_LIST 
}

