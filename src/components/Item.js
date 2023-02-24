import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  const cartClass = inCart ? "in-cart" : "";

  const buttonText = inCart ? "Remove From Cart" : "Add To Cart";

  function handleClick() {
    setInCart((inCart) => !inCart);

  };

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
