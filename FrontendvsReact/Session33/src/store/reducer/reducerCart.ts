import type { Action } from "redux";

const initialState = {
  cart: [
    { 
        id: 1, 
        title: "pizza", 
        price: 30, 
        quantity: 32 
    },
    { 
        id: 2, 
        title: "Hamburger", 
        price: 20, 
        quantity: 30 
    },
  ],
};

export const reducerCart = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD": {
      const check = state.cart.find((item) => item.id === action.payload.id);
      if (check) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: Math.max(1, action.payload.quantity || 1) }],
      };
    }
    case "EDIT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: Math.max(1, action.payload.quantity) } : item
        ),
      };
    case "DELETE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
