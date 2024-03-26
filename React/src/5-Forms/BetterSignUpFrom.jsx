import { useState } from 'react';

export default function BetterSignUpForm() {
    const [formData, setFormData] = useState({ firstName: " ", lastName: " ", passWord: " "});

    // const handleChange = (evt) => {
    //     const changedFiled = evt.target.name; //这个name return的是input的key value，即为firstname和lastname
    //     const newValue = evt.target.value;
    //     console.log(changedFiled, newValue);
    // };

    // const handleChange = (evt) => {
    //     const changedFiled = evt.target.name;
    //     const newValue = evt.target.value;
    //     setFormData((currData) => {
    //         currData[changedFiled] = newValue;
    //         return { ...currData };
    //     });
    // };

    const handleChange = (evt) => {
        const changedFiled = evt.target.name;
        const newValue = evt.target.value;
        setFormData((currData) => {
            return { 
                ...currData, 
                [changedFiled]: newValue};
        });
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    return (
        <div>
            <label htmlFor='firstname'> Enter a Firstname </label>
            <input
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                name='firstName' //和上面useState的key对应
                id='firstname'
            />
            <label htmlFor='lastname'> Enter a Lastname </label>
            <input
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                name='lastName'
                id='lastname'
            />
            <label htmlFor='password'> Enter a Password </label>
            <input
                type="password"
                placeholder="Password"
                value={formData.passWord}
                onChange={handleChange}
                name='passWord'
                id='password'
            />
            <button onClick={handleSubmit}> Submit </button>
        </div>
    )
}