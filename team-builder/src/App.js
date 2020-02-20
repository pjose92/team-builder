import React, { useState } from 'react';
import data from './Data';
import './App.css';
import Members from "./component/Members"
import Form from "./component/Form"

function App(props) {
  const [teamHere, setTeamHere] = useState([
    ...data 
  ]);
  console.log(data);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamHere([...teamHere, newMember])
  }

  return (
    <div>
      <h1>The Team</h1>
      <div>
        <Form addNewMember={addNewMember} />
        <Members members={teamHere} />
      </div>
    </div>
  );
}

export default App;
