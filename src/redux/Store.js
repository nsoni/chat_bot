import React, {useReducer} from 'react'
export const Store = React.createContext()

const initialState = {
  message: [],
}

const reducer = (state=initialState,action) => {
  switch(action.type) { 
    case "ADD" : return { ...state}
    default:
      return state;
  }
}

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value = {{state, dispatch}}>{props.children}</Store.Provider>
}
