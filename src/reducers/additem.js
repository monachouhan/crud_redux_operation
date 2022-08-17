import { Action } from "history";
import { ADD_ITEM, GET_ITEM } from "../constants/actionTypes";

const initialState = {
    additem :{
        name :'',
        googleReviews :'',
        googleRating :0,
        itemNumber :0,
        description :'',
        address :'',
        city :'',
        state :'',
        zipCode :'',
        userId :'',
        itineraryId :'',
        itineraryDayId :'',
        location :[0]
    }
}
const AddReducer = (state = initialState , action) =>{
    switch(action.type){
        case ADD_ITEM:
          let addItemData = action.user2
          console.log("additem data==>>>>", addItemData);
          return{
            ...state,
            additem : addItemData,
            
          }
          case GET_ITEM:
            let getItemData = action.user2
            console.log("getItem data===>>>>", getItemData);
            return {
                ...state,
              additem : getItemData 
            }
           default :
           return  {
            ...state
           }
    }
}

export default AddReducer