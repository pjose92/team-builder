import React from "react";

const Team = props => {
  return (
    <div className="member-list">
      {props.members.map(member => (
        <div className="member" key={member.id}>
          <h4>{member.name}</h4>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;