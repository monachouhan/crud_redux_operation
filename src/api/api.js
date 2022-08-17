import axios from 'axios';
import { config } from './config';

// import store from '../store/index'
const instance = axios.create({
  baseURL: config.SERVER_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000,
  
});
// store.subscribe(async () => {
//   var token = store.getState().user.token;
//   if (token) {
//     instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   }
// });

export const API = {
  userApi: {
    registerUser: async (data) => {
      console.log("data in api method===>", data);
      return instance
        .post(config.REGISTER_USER, data)
        .then(res => { return res; })
        .catch(err => { return err; });
    },
  },
  userApi2 : {
    loginUser: async (data2) =>{
      console.log("data in api login method====>",data2);
      return instance
      .post(config.LOGIN_USER , data2)
      .then(res => { return res; }) 
      .catch(err => { return err; })
    },
  },

  userApi3 :{
    addItm : async (data3) =>{
      console.log("data in api add item method===>" , data3);
      return instance
      .post(config.ADD_ITEM , data3)
      .then(res => { return res; })
      .catch(err  => {return err; })
    }
  },

  userApi4 :{
    getItem : async (data4) =>{
      console.log("data in api get item method===>" , data4);
      return instance
      .get(config.GET_ITEM , data4)
      .then(res => { return res; })
      .catch(err  => {return err; })
    }
  }
};
export default API;