import { GET_BOOK_ERROR, GET_BOOK_LOADING, GET_BOOK_SUCCESS } from "./Action.type"

const Inistate={
    book:[],
    isLoading:false,
    error:false
}



export const Reducer=(state=Inistate,{type,payload})=>{
    switch(type){
        case GET_BOOK_LOADING:{
            return{...state,
                 isLoading:true,
                 error:false
            }      
        }

        case GET_BOOK_SUCCESS:{
            return{...state,
                 isLoading:false,
                 error:false,
                 book:payload
            }      
        }

        case GET_BOOK_ERROR:{
            return{...state,
                 isLoading:false,
                 error:true
            }      
        }
        default:{
            return state
        }
    }
}