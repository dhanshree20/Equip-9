import React, { useState } from 'react';
import axios from 'axios';
import FormInput from '../components/FormInput';

function Registration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/user', formData)
            .then(() => alert('Registration successful'))
            .catch(() => alert('Error registering user'));
    };

    return (
        <>
        <h1> Registration Form </h1>
        <form onSubmit={handleSubmit}>
            <FormInput label="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            <FormInput label="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            <FormInput label="Mobile Number" type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
            <FormInput label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
            <button type="submit">Register</button>

            <div className="social-login">
                <button className="google">Login with Google</button>
                <button className="facebook">Login with Facebook</button>
                <button className="apple">Login with Apple ID</button>
            </div>
        </form>
        </>
    );
}

export default Registration;