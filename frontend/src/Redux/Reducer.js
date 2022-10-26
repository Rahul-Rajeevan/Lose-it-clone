import { ADD_DATE, ADD_TOTAL, ERR_DATA, GET_DATA, LOAD_DATA } from "./Action.type"
var today = new Date();
let y=today.getMonth(); let b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
var date12 = b[y]+' '+today.getDate()+','+today.getFullYear();

const Inistate={
    total:0,
    date:date12,
    bre:{morning:[],afternoon:[],dinner:[],snack:[]},
    isLoading:false,
    isError:false
}



export const Reducer=(state=Inistate,{type,payload})=>{
    switch(type){
        case ADD_DATE:{
            return {...state,date:payload}
        }
        case GET_DATA:{
            let h=[...payload.morning,...payload.afternoon,...payload.dinner,...payload.snack];
            let b=h.reduce((ini,cur)=>ini+(cur.cal*cur.qty),0)
            return {...state,isLoading:false,bre:{...payload},isError:false,total:b}
        }
        case LOAD_DATA:{
            return {...state,isLoading:true,isError:false}
        }
        case ERR_DATA:{
            return {...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }
}