import { useState } from 'react';

export default function ProfileSearchFrom({ search }) {
    const [term, setTerm] = useState("");

    function handleChange(evt) {
        setTerm(evt.target.value);
    }

    function handleSumbit(evt) {
        evt.preventDefault();
        search(term);
        setTerm("");
    }

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <input value={term} onChange={handleChange} />
                <button>Search</button>
            </form>
        </div>
    )
}