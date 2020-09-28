import React from "react";
import { Provider } from "react-redux";
import Cart from "./componentes/Cart";
import Catalog from "./componentes/Catalog";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
