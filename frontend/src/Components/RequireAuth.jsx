import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const RequireAuth = ({children}) => {
  
const {isAuth}=useSelector((state)=>state.AuthReducer)
const location=useLocation()

if(!isAuth)
{
  <Navigate to="/login" state={{from:location}} replace/>
}
else{
  return children
}
}

export default RequireAuth