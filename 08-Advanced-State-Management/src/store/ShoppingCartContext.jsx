import { createContext, useReducer, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products.js";

const CartContext = createContext({
  items: [],
  addItem: (id) => {},
  updateCartItem: (a, b) => {},
});

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload,
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        updatedItems[existingCartItemIndex] = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
      } else {
        const product = DUMMY_PRODUCTS.find(
          (product) => product.id === action.payload,
        );
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }
      return {
        ...state,
        items: updatedItems,
      };
    }
    case "UPDATE_ITEM": {
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId,
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
      };
    }
  }

  return state;
}

const CartContextProvider = (props) => {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(reducer, {
    items: [],
  });
  const [shoppingCart, setShoppingCart] = useState();

  function handleAddItemToCart(id) {
    shoppingCartDispatch({ type: "ADD_ITEM", payload: id });
    //
    // setShoppingCart((prevShoppingCart) => {
    //   const updatedItems = [...prevShoppingCart.items];
    //
    //   const existingCartItemIndex = updatedItems.findIndex(
    //     (cartItem) => cartItem.id === id,
    //   );
    //   const existingCartItem = updatedItems[existingCartItemIndex];
    //
    //   if (existingCartItem) {
    //     updatedItems[existingCartItemIndex] = {
    //       ...existingCartItem,
    //       quantity: existingCartItem.quantity + 1,
    //     };
    //   } else {
    //     const product = DUMMY_PRODUCTS.find((product) => product.id === id);
    //     updatedItems.push({
    //       id: id,
    //       name: product.title,
    //       price: product.price,
    //       quantity: 1,
    //     });
    //   }
    //
    //   return {
    //     items: updatedItems,
    //   };
    // });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: { productId, amount },
    });
    // setShoppingCart((prevShoppingCart) => {
    //   const updatedItems = [...prevShoppingCart.items];
    //   const updatedItemIndex = updatedItems.findIndex(
    //     (item) => item.id === productId,
    //   );
    //
    //   const updatedItem = {
    //     ...updatedItems[updatedItemIndex],
    //   };
    //
    //   updatedItem.quantity += amount;
    //
    //   if (updatedItem.quantity <= 0) {
    //     updatedItems.splice(updatedItemIndex, 1);
    //   } else {
    //     updatedItems[updatedItemIndex] = updatedItem;
    //   }
    //
    //   return {
    //     items: updatedItems,
    //   };
    // });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItem: handleAddItemToCart,
    updateCartItem: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export { CartContextProvider, CartContext };
