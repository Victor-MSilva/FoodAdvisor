import React from "react";

import Card from "react-bootstrap/Card";
import Ingredients from "./Ingredients";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./RecipeItem.css";

const RecipeItem = (props) => {
  return (
    <Card className="m-1">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <Ingredients items={props.ingredients} />
        </Card.Text>
        <div>
          <Button href={"/"+props.creatorId+"/recipes/"+props.id+"/edit"} className="styleButton" variant="outline-info">
            <FontAwesomeIcon icon={faEdit} />
          </Button>
          <Button className="styleButton" variant="outline-danger">
            <FontAwesomeIcon icon={faTrashAlt} />
          </Button>
        </div>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Shared in {props.creationDate}</small>
      </Card.Footer>
    </Card>
  );
};

export default RecipeItem;
