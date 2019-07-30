import React, {useState, useEffect} from 'react'
import axiosToken from '../helpers/axiosToken.js';
import { withRouter } from 'react-router-dom';

const Users = () => {
    const [users,
        setUsers] = useState({users: []});

    useEffect(() => {
        const fetchData = async() => {
            const result = await axiosToken.get('/auth/users');
            setUsers(result.data);
        }
        fetchData();
    }, []);

    console.log(users);
    return users.length
        ? (
            <div className="users">
                {users.map((user) => {
                    return <li key={user.id}>{user.username}</li>
                })}
            </div>
        )
        : (
            <div className='empty'>Please login to see users...</div>
        );
};

export default withRouter(Users);