import React from "react";
import "./App.css";
import DropDownMenu from "./Components/DropDownMenu";

const App = () => {
  const fruitList = ["apple", "mango", "grapes", "banana", "watermelon"];
  return (
    <div >
      <nav>
        <div className="text-center">DropDownMenu</div>
      </nav>
      <div className="contain">

      <DropDownMenu fruitList={fruitList} />
      </div>
      
    </div>
  );
};

export default App;
