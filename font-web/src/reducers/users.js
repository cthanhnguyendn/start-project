/**
 * Created by THANHBEO on 5/12/2016.
 */
import RestAPI from '../utils/RestAPI'
const FETCHING = "USERS_FETCHING"
const EXCUTED_SUCCSESS = "USERS_EXCUTED_SUCCSESS"
export default (state = {},action)=>{
    switch (action.type){
        case FETCHING:{
            return {
                ...state,
                fetching:true,
            }
        }
        case EXCUTED_SUCCSESS:{
            return{
                ...state,
                listUser:action.result.data.content
            }
        }
        default:{
            return state;
        }
    }
}
export const loadUser = (command)=>{
    return{
        types: [FETCHING, EXCUTED_SUCCSESS],
        promise:(client)=>{
            client({
                url:RestAPI.users_manager
            })
        }
    }
}