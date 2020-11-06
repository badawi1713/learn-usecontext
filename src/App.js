import React from "react";
import Header from "./views/components/Header";
import Food from "./views/components/Food";

import { FoodProvider } from "./context/FoodContext";
import "./App.css";

const App = () => {
  return (
    <div className="content">
      <FoodProvider>
        <Header />
        <Food />
      </FoodProvider>
    </div>
  );
};

export default App;
