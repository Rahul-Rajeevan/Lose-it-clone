import { ERR_DATA, GET_BOOK_ERROR, GET_BOOK_LOADING, GET_BOOK_SUCCESS, GET_DATA, LOAD_DATA, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./Action.type"
import axios from 'axios'

export const login=(payload)=>(dispatch)=>{
   dispatch({type:LOGIN_LOADING})
   axios.post("http://localhost:8080/user/login",payload).then((r)=>{ 
   if(r.data.token)
   dispatch({type:LOGIN_SUCCESS,payload:r.data.token})
   else
   {alert("Email ID or password is wrong")
   dispatch({type:LOGIN_ERROR})}
   })
}


export const logout=()=>(dispatch)=>{
   console.log("Logout")
   dispatch({type:LOGOUT_SUCCESS})
}

export const fetchDay=(date)=>async(dispatch)=>{
   dispatch({type:LOAD_DATA})
   const token=localStorage.getItem("token")||"";
  axios.post("http://localhost:8080/day/details",{date},{headers:{"Authorization":`Bearer ${token}`}}).then((r)=>{
  dispatch({type:GET_DATA,payload:r.data})
  })
  .catch((err)=>dispatch({type:ERR_DATA}))
 }