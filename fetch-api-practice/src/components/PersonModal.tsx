import React from "react";
import { Individual } from "../types/PersonTypes";
import { Modal } from "react-bootstrap";

interface ModalProp {
  person: Individual;
  show: boolean;
}

const PersonModal: React.FC<ModalProp> = ({ person, show }) => {
  return (
    <Modal show={show} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>
          {person.first_name} {person.last_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{person.email}</p>
        <p>{person.gender}</p>
      </Modal.Body>
    </Modal>
  );
};

export default PersonModal;
