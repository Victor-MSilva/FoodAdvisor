import React from "react";

const Ingredients = (props) => {
  return (
    <ul>
        {props.items.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
    </ul>
  );
};

export default Ingredients;
