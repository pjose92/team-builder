import React, { useState } from 'react';

const TeamForm = props => {

    const [ member, setMember ] = useState([
        {
            id: "",
            name: "",
            email: "",
            role: "",
          }
    ]);

    const handleChanges = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        console.log("YEAH! IT SUBMITS!");
        event.preventDefault();
        props.addNewMember(member);
        setMember({
            id: "",
            name: "",
            email: "",
            role: "",
        })
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name: </label>
            <input 
            type="text"
            placeholder="Enter Name"
            id="name"
            name="name"
            onChange={handleChanges}
             />
             <label htmlFor='email'>Email: </label>
            <input 
            type="email"
            placeholder="Enter Email"
            id="email"
            name="email"
            onChange={handleChanges}
             />
             <label htmlFor='role'>Role: </label>
            <input 
            type="text"
            placeholder="Enter Role"
            id="role"
            name="role"
            onChange={handleChanges}
             />

            <button className="btn btn-primary btn-sm text-white" type='submit'>Add Member</button>
        </form>
    )
}


export default TeamForm