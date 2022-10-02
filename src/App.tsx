import React from "react";

import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meal/Meals";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
};

export default App;
