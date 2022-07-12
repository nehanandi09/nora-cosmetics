import React from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";

import Error from "./pages/Error";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Products />
    </main>
  );
}

export default App;
