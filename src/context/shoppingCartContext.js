import { createContext, useState } from "react";


export const shoppingCartContext = createContext();

//Custom hook to access the shoppingCartContext:
export const useShoppingCart = () => useShoppingCart();

const shoppingCartInitialState = [];

export const ShoppingCartProvider = (props) => {
  const { children } = props;
  const [shoppingCart, setShoppingCart] = useState(shoppingCartInitialState);

  const removeItem = (id) => {
    setShoppingCart(
      shoppingCart.filter(item => item.id !== id)
    )
  };

  // Takes a product, and adds it to the shopping cart.
  const addItemToCart = (product) => {
    
    setShoppingCart(
      [ ...shoppingCart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          image: product.image
        }
      ]
    );
  };

  const emptyShoppingCart = () => {
    setShoppingCart(shoppingCartInitialState);
  }
  
  return (
    <shoppingCartContext.Provider value={{ shoppingCart, removeItem, addItemToCart, emptyShoppingCart }}>
      {children}
    </shoppingCartContext.Provider>
  )
}