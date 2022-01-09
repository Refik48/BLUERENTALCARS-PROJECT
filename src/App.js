import React from "react";
import MenuBar from "./components/common/MenuBar";
import TopBar from "./components/common/TopBar";
import Slider from "./components/home/Slider";
import CustomerServices from "./components/services/CustomerServices";

const App = () => {
  return (
    <div>
      <TopBar />
      <MenuBar />
      <Slider />
      <CustomerServices />
    </div>
  );
};

export default App;
