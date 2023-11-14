import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/useReducer";

const TShirtsContext = createContext({});
export const useTShirtsContext = () => {
  return useContext(TShirtsContext);
};

const TShirtsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        tShirts: state?.tShirts,
        cart:state?.cart,
        addToCart: (selectData) => {
            dispatch({type:"ADD_TO_CART",payload:selectData})
        },
        deleteToCart: (selectedItem) => {
            dispatch({type:"DELETE_TO_CART",payload:selectedItem})
        }
    }
    return <TShirtsContext.Provider value={value}>{ children}</TShirtsContext.Provider>
}
export default TShirtsProvider;