import React from "react";
import { Table } from "react-bootstrap";
import "../styles/Animals.css";

interface AnimalsProps {}

export const Animals: React.FC<AnimalsProps> = () => {
  return (
    <div className="col-5">
      <Table striped hover>
        <thead>
          <tr>
            <th>Animal Common Name</th>
            <th>Animal Scientific Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{}</th>
            <th>{}</th>
            <th>{}</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
