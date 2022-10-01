import {legacy_createStore,applyMiddleware,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { AuthReducer } from './AuthReducer'
import { Reducer } from './Reducer'


const RootReducer=combineReducers({
    AuthReducer:AuthReducer,
    Reducer:Reducer
})


export const store=legacy_createStore(
    RootReducer, applyMiddleware(thunk) 
    )