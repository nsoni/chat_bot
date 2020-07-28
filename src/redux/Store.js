import React, {useReducer} from 'react'
export const Store = React.createContext()

const initialState = {
  message: [],
}

export function addChat(arg){
  arg.dispatch({
    type: 'ADD',
    message: arg.new_message,
  })
}

const reducer = (state=initialState,action) => {
  switch(action.type) { 
    case "ADD" : 
      return {
        ...state,
        message: action.message
      }
    default:
      return state;
  }
}

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value = {{state, dispatch}}>{props.children}</Store.Provider>
}
