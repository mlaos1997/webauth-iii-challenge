import React from 'react'
import { Route, NavLink, withRouter } from "react-router-dom";
import Users from "./Users.js";
import Signup from './Signup.js';
import Login from './Login.js';


const NavBar = props => {

    const logout = () => {
        localStorage.removeItem('token');
        props.history.push('/login');
    };

    return (
        <div className="navbar">
            <h1>Welcome Marcelo</h1>
            <ul>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/register'>Signup</NavLink>
                </li>
                <li>
                    <NavLink to='/users'>Users</NavLink>
                </li>
                <li>
                    <button onClick={logout}>Logout</button>
                </li>
            </ul>

            <main>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Signup}/>
                <Route path='/users' component={Users}/>
            </main>
        </div>
    )
};

export default withRouter(NavBar);