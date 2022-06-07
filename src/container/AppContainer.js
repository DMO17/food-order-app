import { Fragment, useState } from "react";
import { Cart } from "../components/Cart";
import { Header } from "../components/Header";
import { Meals } from "../components/Meals";

export const AppContainer = () => {
  const [showCart, setShowCart] = useState(false);

  const onClickCartHandler = () => setShowCart((prevState) => !prevState);
  return (
    <Fragment>
      {showCart && <Cart onClickCartHandler={onClickCartHandler} />}
      <Header onClickCartHandler={onClickCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};
