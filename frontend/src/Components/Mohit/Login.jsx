import React from 'react'
import style from "./Login.module.css"
import axios from "axios"
//https://dry-plateau-25724.herokuapp.com/
const Login = () => {
const handleSubmit=()=>{
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    if(!email || !password){return}
    //make api call
    console.log(email,password)
    axios.post('https://dry-plateau-25724.herokuapp.com/user/login', {
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


  return (<>
    <div className={style.main}>
        <div id='upper_login'>
            <img className={style.logo_img} src="https://my.loseit.com/LoseIt_Logo_FullColor.png" alt="" />
            <div className={style.emailPassword}>Email address</div>
            <input id='email' className={style.email_input} type="text" />
            <div className={style.emailPassword}>Password</div>
            <input id='password' className={style.email_input} type="text" />
            <div className={style.login_but}  onClick={handleSubmit} >
                <div className={style.empty_div}></div>
                Login
                </div>
            

        </div>
        <div id='lower_login'>
        <div className={style.forget_pass}>Forgot your password?</div>
        <div className={style.flex}>
            <div className={style.dont_have}>Don't have an account? </div>
            <div className={style.create_one}> Create one now!</div>
        </div>
            
        <div className={style.flex2}>
            <div className={style.or_line}></div>
            <div className={style.mid_or}>OR</div>
            <div className={style.or_line}></div>
            </div>
            <div className={style.apple_but}  onClick={()=>{console.log("apple")}} >
                
                <div className={style.apple_but_in}>
                <div className={style.empty_div}></div>
                   
                    <div className={style.logo_top_flex}> 
                         <div><img className={style.apple_logo} src="https://logodix.com/logo/313717.png" alt="" /></div>

                         Sign in with Apple
                         </div>
                    </div>
                
                </div>
                <div className={style.empty_div}></div>
                <div className={style.empty_div}></div>
                <div className={style.empty_div}></div>
                <div className={style.dont_have}>Sign In with Facebook is no longer supported</div>
                <div  className={style.forget_pass_now}>Create a new password now!</div>
        </div>
    </div>
    
    {/* lower section */}
  
    <div className={style.or_line2}></div>

    <div>
        <div className={style.copyRight} >© Copyright 2008-2022 FitNow, Inc. All Rights Reserved</div>
        <div className={style.privacy}>Privacy | Terms of Service</div>
    </div>
    
    
    </>
  )
}

export default Login