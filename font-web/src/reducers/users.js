/**
 * Created by THANHBEO on 5/12/2016.
 */
import RestAPI from '../utils/RestAPI'
import {login} from './authentication'
const FETCHING = "USERS_FETCHING"
const EXCUTED_SUCCSESS = "USERS_EXCUTED_USER_SUCCSESS"
const EXCUTED_EDIT_SUCCSESS = "EXCUTED_EDIT_USER_SUCCSESS"
const EXCUTED_PROFILE_SUCCSESS = "EXCUTED_PROFILE_SUCCSESS"
const REQUEST_FAILD = "REQUEST_USER_FAILD"
const EXCUTED_REGISTER = "EXCUTED_REGISTER_USER"
export default (state = {content: [],pojo:{userProfile:{user:{}}}}, action)=> {
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
        case EXCUTED_PROFILE_SUCCSESS:
        {
            return {
                ...state,
                pojo: {...state.pojo,userProfile:action.result.data.pojo}
            }
        }
        case EXCUTED_REGISTER:
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
        values.userProfile=null
        dispatch({
            types: [FETCHING, EXCUTED_EDIT_SUCCSESS,REQUEST_FAILD],
            promise: (client)=> {

                return client({
                    method: 'post',
                    url: RestAPI.users_edit,
                    data: {crudAction:"insert-update",pojo:values}
                })},
            afterSuccess: (dispatch, getState, reponse)=> {
                resolve();
                dispatch(loadUser({}));
            },
            afterError:(dispatch, getState, reponse)=>{
                if(reponse.status==400){
                    var errorJson = reponse.data.errorsFields.reduce((last,item)=>{
                        return {...last,...item}
                    },{})
                    reject(errorJson)
                }
            }
        })
    })
}
export const submitUserProfile = (values, dispatch)=> {
    return new Promise((resolve, reject)=> {
        dispatch({
            types: [FETCHING, EXCUTED_PROFILE_SUCCSESS,REQUEST_FAILD],
            promise: (client)=> {

                return client({
                    method: 'post',
                    url: RestAPI.usersProfile_edit,
                    data: {crudAction:"insert-update",userId:values.user.userId,pojo:values}
                })},
            afterSuccess: (dispatch, getState, reponse)=> {
                resolve();
                dispatch(loadUser({}));
            },
            afterError:(dispatch, getState, reponse)=>{
                if(reponse.status==400){
                    var errorJson = reponse.data.errorsFields.reduce((last,item)=>{
                        return {...last,...item}
                    },{})
                    reject(errorJson)
                }
            }
        })
    })
}
export const innitForm = (data={})=>{
    return {
        types: [FETCHING, EXCUTED_EDIT_SUCCSESS,REQUEST_FAILD],
        promise: (client)=>(
            client({
                method: 'post',
                url: RestAPI.users_edit,
                data: data
            })
        ),
        afterSuccess: (dispatch, getState, reponse)=> {

        }

    }
}
export const register = (values, dispatch)=> {
    return new Promise((resolve, reject)=> {
        var password = values.password;
        var userName = values.userName;
        dispatch({
            types: [FETCHING, EXCUTED_REGISTER,REQUEST_FAILD],
            promise: (client)=> {
                return client({
                    method: 'post',
                    url: RestAPI.users_register,
                    data: {pojo:values}
                })},
            afterSuccess: (dispatch, getState, reponse)=> {
                resolve();
                dispatch(login(userName,password));
            },
            afterError:(dispatch, getState, reponse)=>{
                if(reponse.status==400){
                    var errorJson = reponse.data.errorsFields.reduce((last,item)=>{
                        return {...last,...item}
                    },{})
                    reject(errorJson)
                }
            }
        })
    })
}
export const clearUser = {type:EXCUTED_EDIT_SUCCSESS,result:{data:{pojo:{}}}}