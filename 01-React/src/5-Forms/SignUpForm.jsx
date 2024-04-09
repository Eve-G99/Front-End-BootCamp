import { useState } from "react";

function SignupForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    const updateFirstName = (evt) => {
        setFirstName(evt.target.value);
    }
    const updateLastName = (evt) => {
        setLastName(evt.target.value);
    }

    const handleSubmit = () => {
        console.log(firstName, lastName)
    }

    return (
        <div>
            <label htmlFor='firstname'> Enter a Firstname </label>
            <input
                type="text"
                placeholder="Firstname"
                value={firstName}
                onChange={updateFirstName}
                id='firstname'
            />
            <label htmlFor='lastname'> Enter a Lastname </label>
            <input
                type="text"
                placeholder="Lastname"
                value={lastName}
                onChange={updateLastName}
                id='lastname'
            />
            <button onClick={handleSubmit}> Submit </button>
        </div>
    )
}

export default SignupForm;