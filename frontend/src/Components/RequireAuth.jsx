import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const RequireAuth = ({children}) => {
const navigate=useNavigate()
const {isAuth}=useSelector((state)=>state.AuthReducer)
const location=useLocation()
let token=localStorage.getItem("token")||null
useEffect(() => {
 
  if(!token)
  {
    navigate("/login")
  }
  
}, [])
if(token)
return children
}



export default RequireAuth