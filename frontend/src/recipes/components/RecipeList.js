import React from "react";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import RecipeItem from "./RecipeItem";
import Col from "react-bootstrap/Col";

const RecipeList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Recipe found. Share one.</h2>
          <button>Share Recipe</button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container">
      <CardDeck className="row mt-1">
        {props.items.map((recipe) => (
          <Col xs="12" md = "4" className="mt-3">
            <RecipeItem
              key={recipe.id}
              id={recipe.id}
              image={recipe.imageUrl}
              title={recipe.title}
              ingredients={recipe.ingredients}
              steps={recipe.steps}
              creatorId={recipe.creator}
              creationDate={recipe.creationDate}
              creatorName={recipe.creatorName}
            />
          </Col>
        ))}
      </CardDeck>
    </div>
  );
};

export default RecipeList;
