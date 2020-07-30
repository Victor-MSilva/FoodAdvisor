import React from "react";

import "./FormIngredients.css";

const FormIngredients = (props) => {
  return (
    <div className="input-group">
        <div className="editable">
          <ul className="ingredientsText" contentEditable="true">
            <li></li>
          </ul>
        </div>
      
    </div>
  );
};

export default FormIngredients;
