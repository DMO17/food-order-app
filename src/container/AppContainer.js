import { useState } from "react";
import { Cart } from "../components/Cart";
import { Header } from "../components/Header";
import { Meals } from "../components/Meals";
import { CartProvider } from "../context/CartProvider";

export const AppContainer = () => {
  const [showCart, setShowCart] = useState(false);

  const onClickCartHandler = () => setShowCart((prevState) => !prevState);

  return (
    <CartProvider>
      {showCart && <Cart onClickCartHandler={onClickCartHandler} />}
      <Header onClickCartHandler={onClickCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};
