import { ADD_DATE, ADD_TOTAL } from "./Action.type"

const Inistate={
    total:0,
    date:100
}



export const Reducer=(state=Inistate,{type,payload})=>{
    switch(type){
        case ADD_TOTAL:{
            console.log(state.total)
            return{...state,total:(state.total+payload)
            }      
        }
        case ADD_DATE:{
            return {...state,date:(state.date+payload)}
        }
        default:{
            return state
        }
    }
}