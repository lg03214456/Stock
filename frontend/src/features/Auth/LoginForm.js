// src/features/Auth/LoginForm.js
import React, { useState , useEffect, useContext } from 'react';
import { loginUser } from './AuthService';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // 引入 AuthContext

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [message, setmessage] = useState(''); 
    const [status, setstatus] = useState(0); 
    const navigate = useNavigate(); // 用於導航

    const { login } = useContext(AuthContext); // 從 Context 獲取 login 函數

    useEffect(() => {
        if(status === true){
        console.log('123');
        navigate('/dashboard',{username});
    }
}, [status, navigate, username]); // 當 status 更新時執行

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        //setmessage(null);
        try {
            const data = await loginUser(username, password);
            setmessage(data.message);
            setstatus(data.status);
            alert(`Welcome, ${data.user.username} !`);
            console.log(data.status);
            console.log(data.message);
            login(data.user);


           
        } catch (err) {
            setError(err.error);
            console.log(err.error);
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
            <h3>{message}</h3>
            <h3>{username}</h3>
            <h3>{password}</h3>
            <h3>{error}</h3>

        </form>
    );
};

export default LoginForm;
