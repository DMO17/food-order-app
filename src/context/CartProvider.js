import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const ACTIONS = {
  ADD: "ADD TO CART",
};
const initialCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if ((action.type = ACTIONS.ADD)) {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

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
