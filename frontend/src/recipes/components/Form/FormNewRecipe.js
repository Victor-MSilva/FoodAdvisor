import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import FormIngredients from "./FormIngredients";

import "./FormNewRecipe.css";

const FormNewRecipe = (props) => {
  return (
    <div className="row row-cols-2 row-cols-sm-3">
      <Container className="container-form">
        <Form>
          <h1 className="title">Share New Recipe</h1>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Select a nice image"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ingredients</Form.Label>
            <FormIngredients />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Method</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default FormNewRecipe;
