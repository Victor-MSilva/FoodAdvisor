import React from "react";
import Recipe from "../components/RecipeItem"

const NewRecipe = () => {
  const RECIPE = [
    {
      id: "u1",
      name: "Victor",
      image:
        "http://www.pe.senac.br/wp-content/uploads/2019/03/562910-PL27RV-687_2.jpg",
      recipes: 3,
    },
    {
      id: "u1",
      name: "Victor",
      image:
        "http://www.pe.senac.br/wp-content/uploads/2019/03/562910-PL27RV-687_2.jpg",
      recipes: 3,
    },
  ];
  return <Recipe name={RECIPE[0].name} />;
};

export default NewRecipe;
