import React from "react";
import { Individual } from "../types/PersonTypes";

interface PersonProp {
  person: Individual;
}

const Person: React.FC<PersonProp> = ({ person }) => {
  return (
    <React.Fragment>
      <th>{person.first_name}</th>
      <th>{person.last_name}</th>
      <th>{person.email}</th>
      <th>{person.gender}</th>
    </React.Fragment>
  );
};

export default Person;
