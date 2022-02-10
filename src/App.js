import React from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import CartPage from './components/pages/CartPage';
import CounterPage from "./components/pages/CounterPage";
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import { ShoppingCartProvider } from "./context/shoppingCartContext";

export const shoppingCartContext = React.createContext();

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route
              path="cart"
              element={<CartPage />}
            />
            <Route
              path="counter"
              element={<CounterPage />}
            />
            <Route path="sign-in" element={<SignInPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
