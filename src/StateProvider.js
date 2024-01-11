import React , { createContext , useContext , useReducer
} from "react"

// Preparing the data layer for functionn of add to basket and shows u in the cart
export const StateContext = createContext();


// Wrapping up our and providinng the data layer . Dont stress over this js file
export const StateProvider = ({reducer , initialState , children}) => (
    <StateContext.Provider value={useReducer(reducer , initialState)}>
        {children}
    </StateContext.Provider>
);
export const useStateValue= () => useContext(StateContext);