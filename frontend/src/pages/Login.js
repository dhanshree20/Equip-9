import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({ mobile: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/auth/login', formData)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                navigate('/landing');
            })
            .catch(() => alert('Login failed'));
    };

    return (
        <>
        <h1> Login Form </h1>
        <form onSubmit={handleSubmit} >
            <h3>Mobile Number </h3>
            <input className='mobile' label="Mobile Number" type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} />
            <h3>Password </h3>
            <input className='mobile'  label="Password" type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
        </>
    );
}

export default Login;