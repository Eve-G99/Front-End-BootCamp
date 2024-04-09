import { useState } from "react";

function UsernameForm() {

    const [username, setUsername] = useState("Andy");

    const updateUsername = (evt) => {
        setUsername(evt.target.value);
    }

    return (
        <div>
            {/* use for in html form */}
            <label htmlFor='username'> Enter a username </label>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={updateUsername}
                id='username'   // id is matching htmlFor   
            />
            <button>Submit</button>
        </div>
    )
}

export default UsernameForm;