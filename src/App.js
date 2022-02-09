import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import CartPage from './components/pages/CartPage';
import { useState } from "react";

const shoppingCartInitialState = [];

function App() {

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
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage addItemToCart={addItemToCart} />} />
          <Route
            path="cart"
            element={
            <CartPage
              removeItem={removeItem}
              shoppingCart={shoppingCart}
              emptyShoppingCart={emptyShoppingCart}
              />
            }
          />
          <Route path="sign-in" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
