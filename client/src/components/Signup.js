import React, { useState} from 'react';
import axiosToken from '../helpers/axiosToken.js';
import { withRouter } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const result = await axiosToken.post('/auth/register', {
                username,
                password,
                department
            });
            console.log(result)
        } catch (err) {
            console.log(err);
        };

        setUsername('');
        setPassword('');
        setDepartment('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} required/>
                <input type="text" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required/>
                <input type="text" placeholder='department' value={department} onChange={e => setDepartment(e.target.value)} required/>
                <input type="submit" value="register" />
            </form>
        </div>
    )
};

export default withRouter(Signup);
