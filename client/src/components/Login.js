import React, { useState} from 'react';
import axiosToken from '../helpers/axiosToken.js';
import { withRouter } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e, props) => {
        e.preventDefault();
        try {
            const result = await axiosToken.post('/auth/login', {
                username,
                password
            });
            localStorage.setItem('token', result.data.token);
            props.history.push('/');
            console.log(result);
        } catch (err) {
            console.log(err);
        };

        setUsername('');
        setPassword('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} required/>
                <input type="text" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required/>
                <input type="submit" value="login" />
            </form>
        </div>
    )
};

export default withRouter(Login);
