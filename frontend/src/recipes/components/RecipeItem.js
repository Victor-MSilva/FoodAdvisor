import React from "react";

import Card from "react-bootstrap/Card";
import Ingredients from "./Ingredients";

const RecipeItem = (props) => {
  return (
    <Card className="m-1">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <Ingredients items={props.ingredients} />
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Shared in {props.creationDate}</small>
      </Card.Footer>
    </Card>
  );
};

export default RecipeItem;
