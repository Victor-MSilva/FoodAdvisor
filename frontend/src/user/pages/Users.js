import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Victor",
      image:
        "http://www.pe.senac.br/wp-content/uploads/2019/03/562910-PL27RV-687_2.jpg",
      recipes: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
