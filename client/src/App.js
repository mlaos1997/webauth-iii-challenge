import React from "react";
import NavBar from './components/NavBar.js';
import {withRouter} from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Welcome, please login or register to see Users :)</h1>
            <NavBar/>
        </div>
    );
}

export default withRouter(App);
