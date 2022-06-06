import { Fragment } from "react";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
