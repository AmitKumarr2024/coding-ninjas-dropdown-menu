import React, { useState } from "react";

const DropDownMenu = ({ fruitList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState("Select a Fruit");

  const handleSelect = (fruit) => {
    setSelectedFruit(fruit); 
    setIsOpen(false); 
  };

  return (
    <div
      className="menu"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)} 
    >
      <button className="dropbtn">{selectedFruit}</button>
      {isOpen && (
        <ul className="dropdown-content">
          {fruitList.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
