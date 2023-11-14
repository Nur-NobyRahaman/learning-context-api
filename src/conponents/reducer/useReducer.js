import tShirtsData from "../TShirtsData";
export const initialState = {
  tShirts: tShirtsData,
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
      case "ADD_TO_CART":
      return {
          ...state,
          cart: [...state?.cart, action.payload]
          };
      case "DELETE_TO_CART":
          const filteredItem= state?.cart.filter(cart=> cart?._id !== action.payload)
          return {
              ...state,
              cart: filteredItem
          }

    default:
      return state;
  }
};
