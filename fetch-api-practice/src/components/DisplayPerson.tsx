import React, { useEffect, useState } from "react";
import { fetchData } from "../APIs/fetchAPI";
import Person from "./Person";
import {
  Table,
  Button,
  Form,
  Row,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import PersonModal from "./PersonModal";
import "../styles/DisplayPersonStyles.css";
import { Individual, numberOfGenders } from "../types/PersonTypes";

interface emptyInterface {}

const DisplayPerson: React.FC<emptyInterface> = () => {
  const [person, setPerson] = useState<Individual[]>([]);
  const [searchData, setSearchData] = useState<string>("");
  const [defaultList, setDefaultList] = useState<Individual[]>([]);
  const [searchGender, setSearchGender] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  //API call
  useEffect(() => {
    resetData();
  }, []);

  const resetData = async () => {
    const resetData = await fetchData();
    setPerson(resetData);
    setDefaultList(resetData);
  };
  //API call

  //Searching people
  const searchItems = (e: any) => {
    e.preventDefault();
    const filterPeople = person.filter(
      (people) => people.first_name === searchData
    );

    setPerson(filterPeople);
  };
  //Searching people

  //Filtering people by gender
  const filterByGender = (e: any) => {
    e.preventDefault();

    console.log(searchGender);

    const filterGender = person.filter(
      (people) => people.gender === searchGender
    );

    console.log(`filter gender: ${filterGender}`);
    setPerson(filterGender);
  };
  //Filtering people by gender

  const handleModalShow = () => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <div id="search-items" className="col-5">
        <Form onSubmit={(e) => searchItems(e)}>
          <Row>
            <InputGroup className="mb-3">
              <FormControl
                value={searchData}
                placeholder="Search people"
                onChange={(e) =>
                  setSearchData(
                    e.target.value.substring(0, 1).toUpperCase() +
                      e.target.value
                        .substring(1, e.target.value.length)
                        .toLowerCase()
                  )
                }
              />
            </InputGroup>
          </Row>
        </Form>
        <Form onSubmit={(e) => filterByGender(e)}>
          <InputGroup>
            <Form.Control
              as="select"
              value={searchGender}
              onChange={(e) => setSearchGender(e.target.value)}
            >
              <option selected disabled></option>
              {numberOfGenders().map((gender) => (
                <option>{gender}</option>
              ))}
            </Form.Control>
            <Button variant="outline-warning" onClick={filterByGender}>
              Filter people
            </Button>
          </InputGroup>
        </Form>
      </div>
      <div>
        <Table striped hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody id="person-table-body">
            {person.map((people) => (
              <tr key={people.id} onClick={() => handleModalShow}>
                <Person person={people} />
                <PersonModal person={people} show={show} />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
};

export default DisplayPerson;
