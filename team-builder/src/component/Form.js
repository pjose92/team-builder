import React, { useState } from 'react'

const TeamForm = props => {

    const [ member, setMember ] = useState([
        {
            id: "",
            name: "",
            email: "",
            role: ""
          }
    ]);

    const handleChanges = event =>{
        setMember({...member, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        console.log("Yeah Submit!");
        event.preventDefault();
        props.addNewMember(member);
        setMember({
            name: "",
            email: "",
            role: ""
        })
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name:</label>
            <input 
            type="text"
            placeholder="Name"
            id="name"
            onChange={handleChanges}/>

            <label htmlFor='email'>Email:</label>
            <input 
            type="text"
            placeholder="Email"
            id="email"
            onChange={handleChanges}/>

            <label htmlFor='name'>Role:</label>
            <input 
            type="text"
            placeholder="Role"
            id="role"
            onChange={handleChanges}/>

            <button type="submit">Submit</button>
        </form>
    )
}
export default TeamForm