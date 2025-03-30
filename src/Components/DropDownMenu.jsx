import React, { useState } from "react";

const DropDownMenu = ({ fruitList }) => {
  const [open, setOpen] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState("Select a Fruit");

  const handleSelect = (fruit) => {
    setSelectedFruit(fruit); 
    setOpen(false); 
  };

  return (
    <div
      className="menu"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)} 
    >
      <button className="dropbtn">{selectedFruit}</button>
      {open && (
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
