import React from "react";

import "./FormText.css";

const FormIngredients = (props) => {
  return (
    <div className="input-group">
      <div className="controls">
        <textarea
          aria-label="Caixa de texto de ingredientes"
          id="recipe_ingredients"
          name={props.name}
          placeholder={props.placeholder}
          cols = "54"
          rows = "5"
        ></textarea>
      </div>
    </div>
  );
};

export default FormIngredients;
