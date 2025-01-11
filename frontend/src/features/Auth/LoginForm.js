// src/features/Auth/LoginForm.js
import React, { useState } from 'react';
import { loginUser } from './AuthService';
import Button from '../../components/Button';
import Input from '../../components/Input';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const data = await loginUser(username, password);
            alert(`Welcome, ${data.user}!`);
        } catch (err) {
            setError(err.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button type="submit">Login</Button>
            <h3>{username}</h3>
            <h3>{password}</h3>
            <h3>{error}</h3>
        </form>
    );
};

export default LoginForm;
