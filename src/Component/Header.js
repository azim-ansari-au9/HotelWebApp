import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <nav className="navbar navbar-inverse" style={{background:"black"}}>
            <div className='container-fluid'>
                <div className="navbar-header">
                <button type='button' className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/azim">!O!</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Booking">Booking</Link></li>
                        <li><Link to="/profile">profile</Link></li>
                    </ul>
                    <div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user">SignUp</span></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in">Login</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;