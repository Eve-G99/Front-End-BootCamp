import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileSearchForm from './ProfileSearchForm';

const BASE_URL = "https://api.github.com/users";

function ProfileSearch() {
    const [userName, setUserName] = useState("Eve");
    const [profile, setProfile] = useState({ data: null, loading: true });

    useEffect(
        function fetchProfileOnNameChange() {
            async function fetchProfile() {
                const userResult = await axios.get(`${BASE_URL}/${userName}`);
                setProfile({ data: userResult.data, loading: false });
            }
            fetchProfile();
        },
        [userName]
    );

    function search(userName) {
        setProfile({ data: null, loading: true });
        setUserName(userName);
    }

    if (profile.loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <ProfileSearchForm search={search} />
            <b>{profile.data.name}</b>
            <img src={profile.data.avatar_url} alt={profile.data.name} />
        </div>
    )

}

export default ProfileSearch;