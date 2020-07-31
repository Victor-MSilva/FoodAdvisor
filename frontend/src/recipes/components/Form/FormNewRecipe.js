import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import FormText from "./FormText";

import "./FormNewRecipe.css";
import Button from "react-bootstrap/esm/Button";

const FormNewRecipe = () => {

  return (
    <div className="row row-cols-2 row-cols-sm-3">
      <Container className="container-form">
        <Form>
          <h1 className="title">Share New Recipe</h1>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Select a nice image"
              name="image"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label name="ingredients">Ingredients</Form.Label>
            <Form.Text className="instructions">
              Write each ingredient per line, do not use hyphen, numbers or
              symbols to order.
            </Form.Text>
            <FormText name="ingredients" placeholder="Ex: 04 eggs." />
          </Form.Group>
          <Form.Group>
            <Form.Label>Steps</Form.Label>
            <Form.Text className="instructions">
              Write each step per line, do not use hyphen, numbers or symbols to
              order.
            </Form.Text>
            <FormText name="steps" placeholder="Ex: Preheat the oven to 350 degrees." />
          </Form.Group>
          <Button as="input" type="submit" disabled={false} value="Submit" />
        </Form>
      </Container>
    </div>
  );
};

export default FormNewRecipe;
