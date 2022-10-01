import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./Action.type"

const Inistate={
    isAuth:false,
    isLoading:false,
    error:false,
    token:localStorage.getItem("token")||""
}

export const AuthReducer=(state=Inistate,{type,payload})=>{
    switch(type){
        case LOGIN_LOADING:{
            return{...state,
                 isLoading:true,
                 error:false
            }      
        }

        case LOGIN_SUCCESS:{
            localStorage.setItem("token",payload);
            return{...state,
                 isLoading:false,
                 error:false,
                 token:payload,
                 isAuth:true
            }      
        }

        case LOGIN_ERROR:{
            return{...state,
                 isLoading:false,
                 error:true,
                 token:"",
                 isAuth:false
            }      
        }

        case LOGOUT_SUCCESS:{
            localStorage.removeItem("token");
            return{...state,
                 isLoading:false,
                 error:false,
                 token:"",
                 isAuth:false
            }      
        }
        default:{
            return state
        }
    }
}