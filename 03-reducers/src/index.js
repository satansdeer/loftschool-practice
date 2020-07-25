import { combineReducers, createStore } from 'redux'

const logIn = () => ({type: "LOG_IN", payload: true})
const logOut = () => ({type: "LOG_OUT", payload: false})

const setName = (name) => ({type: "SET_NAME", payload: name})

const authReducer = (state = false, action) => {
  switch(action.type){
    case "LOG_IN":
      return action.payload
    case "LOG_OUT":
      return action.payload
    default:
      return state
  }
}
const userReducer = (state = {name: "Maksim", age: 29}, action) => {
  switch(action.type){
    case "SET_NAME":
      return {...state, name: action.payload}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  authenticated: authReducer,
  user: userReducer
})

/*
{
  authenticated: false,
  user: {name: "Maksim", age: 29}
}
*/

const store = createStore(rootReducer)

console.log('Default:', store.getState())
store.dispatch(logIn())
console.log('Log in:', store.getState())
store.dispatch(logOut())
console.log('Log out:', store.getState())
store.dispatch(setName("Igor"))
console.log('Set name:', store.getState())