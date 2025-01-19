// src/pages/LoginPage.js
import React from 'react';
import LoginForm from '../features/Auth/LoginForm';
import  ButtonAppBar from  '../components/Header';
const LoginPage = () => {
    return (
        <div>
             <ButtonAppBar/>
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
