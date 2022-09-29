import React from 'react'
import style from "./Login.module.css"
import axios from "axios"
const Login = () => {
const handleSubmit=()=>{
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    if(!email || !password){return}
    //make api call
    console.log(email,password)
    axios.post('/user', {
        email: email,
        password: password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
}


  return (
    <div className={style.main}>
        <div id='upper_login'>
            <img className={style.logo_img} src="https://my.loseit.com/LoseIt_Logo_FullColor.png" alt="" />
            <div className={style.emailPassword}>Email</div>
            <input id='email' className={style.email_input} type="text" />
            <div className={style.emailPassword}>password</div>
            <input id='password' className={style.email_input} type="text" />
            <div className={style.login_but}  onClick={handleSubmit} >Login</div>
            

        </div>
        <div id='lower_login'>
        <div className={style.forget_pass}>Forgot your password?</div>
        <div className={style.flex}>
            <div className={style.dont_have}>Don't have an account? </div>
            <div className={style.create_one}> Create one now!</div>
        </div>
            
        <div className={style.flex2}>
            <div className={style.or_line}></div>
            <div>OR</div>
            <div className={style.or_line}></div>
            </div>
            <div className={style.apple_but}  onClick={handleSubmit} >
                
                <div className={style.apple_but_in}>sign in with apple</div>
                
                </div>
        </div>
    </div>
  )
}

export default Login