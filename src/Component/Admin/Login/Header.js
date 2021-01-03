import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <nav class="navbar navbar-inverse" style={{background:'black'}}>
            <div class="container-fluid">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>                        
                </button>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li><Link to="/">SignUp Admin</Link></li>
                    <li ><Link to="/list">Users</Link></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
                </div>
            </div>
        </nav>
    )
}


export default Header;