import React, { useState } from "react";
import "./App.css";
import data from "./Data";
import Members from "./component/Members";
import Header from "./component/Header"
import Form from "./component/Form";
import { Container, Card, Col } from "reactstrap";

function App(props) {
  const [team, setTeam] = useState([
    ...data
  ]);
  console.log(data);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
    };
    setTeam([...team, newMember])
  }
  return (
    <Container>
      <Header />
      <div>
        <Form addNewMember={addNewMember} />
        <Col xs="12">
          <h1>Members List</h1>
        </Col>
        <Card>
        <Members members={team} />
        </Card>
      </div>
    </Container>
  );
}

export default App;