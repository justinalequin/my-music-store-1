import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import CartPage from './components/pages/CartPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
