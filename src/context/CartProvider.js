import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const ACTIONS = {
  ADD: "ADD TO CART",
};
const initialCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if ((action.type = ACTIONS.ADD)) {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCartActions] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartActions({ type: ACTIONS.ADD, item });
  };

  const removeItemFromCart = (id) => {};

  const cartContextValues = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
