/**
 * Created by THANHBEO on 5/12/2016.
 */
import RestAPI from '../utils/RestAPI'
const FETCHING = "USERS_FETCHING"
const EXCUTED_SUCCSESS = "USERS_EXCUTED_USER_SUCCSESS"
const EXCUTED_EDIT_SUCCSESS = "EXCUTED_EDIT_USER_SUCCSESS"
const REQUEST_FAILD = "REQUEST_USER_FAILD"
export default (state = {content: []}, action)=> {
    switch (action.type) {
        case FETCHING:
        {
            return {
                ...state,
                fetching: true,
            }
        }
        case EXCUTED_SUCCSESS:
        {
            return {
                ...state,
                ...action.result.data
            }
        }
        case EXCUTED_EDIT_SUCCSESS:
        {
            return {
                ...state,
                ...action.result.data
            }
        }
        default:
        {
            var sd;
            return state;
        }
    }
}
export const loadUser = (command)=> {
    return {
        types: [FETCHING, EXCUTED_SUCCSESS,REQUEST_FAILD],
        promise: (client)=>(
            client({
                method: 'post',
                url: RestAPI.users_list,
                data: command
            })
        ),
        afterSuccess: (dispatch, getState, reponse)=> {

        }

    }
}
export const submitUser = (values, dispatch)=> {
    return new Promise((resolve, reject)=> {
        resolve();
        dispatch({
            types: [FETCHING, EXCUTED_EDIT_SUCCSESS,REQUEST_FAILD],
            promise: (client)=> (
                client({
                    method: 'post',
                    url: RestAPI.users_edit,
                    data: {crudAction:"insert-update",pojo:values}
                })),
            afterSuccess: (dispatch, getState, reponse)=> {

            },
            afterError:(dispatch, getState, reponse)=>{
                if(reponse.status==400){
                    reject({ userName: 'User does not exist', _error: 'Login failed!' })
                    reponse.data.errorsFields.forEach((item)=>{reject(item)})
                }
            }
        })
    })
}