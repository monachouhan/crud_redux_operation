import { LOGIN_USER, REGISTER_USER, USER_PROFILE , EDIT_USER, GET_REGISTRATION_LIST} from "../constants/actionTypes";

const initialState = {
  profile: {
    name: "",
    username: "",
    email: "",
    mobile: "",
    city: "",
    password: "",
  },
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
     let data = action.users
     console.log(" Register Reducer Data ===>", data);
      return {
        ...state,
        profile: data,
      };

      case LOGIN_USER:
       
        let loginData = action.users
        console.log("login reducer data===>",loginData);
        return{
          ...state,
          profile : loginData,
        }

        case USER_PROFILE:
       
        let userData = action.users
        console.log("userData in user profile reducer===>",userData);
        return{
          ...state,
          user : userData,
        }
     
        case EDIT_USER:
          let editData = action.users
          console.log("edited dataa in ===>>>>>", editData);
          return{
            ...state,
            user: editData,
          }

          case GET_REGISTRATION_LIST:
       
        let data1 = action.users
        console.log("userData in user reg reducer===>",data1);
        return{
          ...state,
          profile : data1,
        }
       
    default:
      return state;
  }
};

export default reducer;