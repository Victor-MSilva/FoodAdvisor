import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import "./UserItem.css";

const UserItem = (props) => {
  return (
    <div>
      <li className="user-item">
        <Card className="user-item__content">
          <Link to={"/${props.id}/places"}>
            <div className="user-item__image">
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className="user-item__info">
              <h2>{props.name}</h2>
              <h3>
                {props.recipeCount}{" "}
                {props.recipeCount === 1 ? "Recipe" : "Recipes"}
              </h3>
            </div>
          </Link>
        </Card>
      </li>
    </div>
  );
};

export default UserItem;