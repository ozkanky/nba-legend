import Form from "react-bootstrap/Form";

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { data } from "../helpers/data";
import { Col } from "react-bootstrap";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase().trim())
  );
  return (
    <>
      <Form.Control
        placeholder="Search a Player"
        className="w-50 m-auto"
        onChange={handleChange}
        type="search"
      />
      <Container className="rounded-4 my-4 card-container">
        <Row className="justify-content-center g-3">
          {filteredData.map((player, i) => (
            <Col xl={3} lg={4} md={6} key={i}>
              <PlayerCard {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
