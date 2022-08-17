import { REGISTER_USER , LOGIN_USER, ADD_ITEM, GET_ITEM, USER_PROFILE , EDIT_USER , GET_REGISTRATION_LIST}  from "../constants/actionTypes";
import { API } from "../api/api";
import axios from "axios";
import { config } from "../api/config";




export const AddUser = (params) => {

  console.log("AddUser ====>>>", params);
  
  
  return dispatch => {
      console.log("Add User dispatch");
      // localStorage.clear();
      axios.post(config.REGISTER_USER, params)
      .then(response => {
 
      const { token } = response.data;
      localStorage.setItem('token', token);
   const { email } = response.data;
   localStorage.setItem('email token' , JSON.stringify(params.email));
   const { password } = response.data;
   localStorage.setItem('password token', JSON.stringify(params.password));

          console.log("response=========>>>c", response);

          dispatch({
            type: REGISTER_USER,
            users: response.data
        });
      })
  };
};


export const LoginUser = (params2) =>{
  console.log("LoginUser=====>>>>>", params2);

  return dispatch =>{
    console.log("Login User dispatch");
    axios.post(config.LOGIN_USER , params2)
    .then(response2 =>{
      const { token } = response2.data;
      localStorage.setItem('token', token);
      console.log("response2========>>>" , response2);

      dispatch({
        type: LOGIN_USER,
        users : response2.data
      });
    })
  };
};


export const AddItem = (params3) =>{
  console.log("LoginUser=====>>>>>", params3);

  return dispatch =>{
    console.log("add item dispatch");
    axios.post(config.ADD_ITEM , params3)
    .then(response3 =>{
      // const { token } = response3.data;
      // localStorage.setItem('token', token);
      console.log("response3========>>>" , response3);

      dispatch({
        type: ADD_ITEM,
        users : response3.data
      });
    })
  };
};

export const GetItem = (params4) =>{
  console.log("get item=====>>>>>", params4);

  return dispatch =>{
    console.log("get item dispatch");
    axios.get(config.GET_ITEM , params4)
    .then(response4 =>{
      
      // const { token } = response3.data;
      // localStorage.setItem('token', token);
      console.log("response4========>>>" , response4);

      dispatch({
        type: GET_ITEM,
        users : response4.data
      });
    })
  };
};

export const UserProfile = () =>{
 
  const token = localStorage.getItem('token');
  console.log("user profile token +++++++>>>>>>>> ", token);
  return dispatch =>{
    console.log("user profile dispatch");
    axios.get(config.USER_PROFILE, {headers: {"Authorization" : `Bearer ${token}`}})
    .then(response5=>{
      console.log("response5 +++++++++>>>>>>>>>>>> ", response5);
      // const { token } = response3.data;
      // localStorage.setItem('token', token);
      dispatch({
        type: USER_PROFILE,
        users : response5.data
      });
    })
  };
};



export const EditProfile =(params) =>{
  console.log("edit item +++++++++params====>>>>>", params);
const token = localStorage.getItem('token');
console.log("edit profile =======token ========>>>" , token);
// const auth = `Bearer ${token}`;
  return dispatch => {
    console.log("edit dispatch==========");
    axios.patch(`${config.EDIT_USER}/${params.id}`, params, {headers : {"Authorization": `Bearer ${token}`}})
    .then(res => {
      console.log("response of edit user ====>>...", res);
    
        dispatch({
          type: EDIT_USER,
          users: res.data,
        })
     });
    }
  }


  export const GetRegistrationList = () =>{
    const token = localStorage.getItem('token');
    return dispatch =>{
      console.log("get item dispatch");
      axios.get(config.GET_REGISTRATION_LIST,{headers: {"Authorization" : `Bearer ${token}`}})
      .then(response =>{
        console.log("response registration users======>>>" , response);
      
        dispatch({
          type: GET_REGISTRATION_LIST,
          users : response.data,
        });
      })
    };
  };
  
