import {legacy_createStore,applyMiddleware,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { AuthReducer } from './AuthReducer'
import { Reducer } from './Reducer'

const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

const RootReducer=combineReducers({
    AuthReducer:AuthReducer,
    Reducer:Reducer
})


export const store=legacy_createStore(
    RootReducer,
    composeEnhancers( applyMiddleware(thunk) )
    )