import { GET_BOOK_ERROR, GET_BOOK_LOADING, GET_BOOK_SUCCESS, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./Action.type"
import axios from 'axios'



export const getBook=(params)=>(dispatch)=>{
   dispatch({type:GET_BOOK_LOADING})
   axios.get("http://localhost:8080/books",params).then((r)=>{
   console.log("dispatch req made",r.data) 
   dispatch({type:GET_BOOK_SUCCESS,payload:r.data})
   }).catch(()=>{
    dispatch({type:GET_BOOK_ERROR})
   })
}




export const login=(payload)=>(dispatch)=>{
   dispatch({type:LOGIN_LOADING})
   axios.post("https://dry-plateau-25724.herokuapp.com/user/login",payload).then((r)=>{ 
      console.log(r.data)
   dispatch({type:LOGIN_SUCCESS,payload:r.data.token})
   }).catch(()=>{
    dispatch({type:LOGIN_ERROR})
   })
}


export const logout=()=>(dispatch)=>{
   console.log("Logout")
   dispatch({type:LOGOUT_SUCCESS})
}

//  export const signup = (payload) => async(dispatch) =>{
//      try{
        
//      }catch(err){
//       console.log("error while posting the data frontend",err.message)
//      }
//  }