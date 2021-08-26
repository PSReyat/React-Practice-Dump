import React from "react";
import { Table } from "react-bootstrap";
import "../styles/Plants.css";

interface PlantsProps {}

export const Plants: React.FC<PlantsProps> = () => {
  return (
    <div className="col-5">
      <Table striped hover>
        <thead>
          <tr>
            <th>Plant Family</th>
            <th>Plant Common Name</th>
            <th>Plant Scientific Name</th>
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
