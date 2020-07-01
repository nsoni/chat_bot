import React, {useReducer} from 'react'
export const Store = React.createContext()

const initialState = {
  message: [],
}

const reducer = (state=initialState,action) => {
  switch(action.types) { 
    case "NET_SATATUS" : return { ...state, message : action.message }
    default:
      return state;
  }
}

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value = {{state, dispatch}}>{props.children}</Store.Provider>
}
