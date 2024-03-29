import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <div className="App ">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
