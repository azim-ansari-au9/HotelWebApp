import React, { Component } from 'react';
import './Search.css';

class Search extends Component{
    render(){
        return (
        <div className="imageContainer">
            <div id="logo">
                D!
            </div>
            <div className="heading">
                Plan for a tour
            </div>
            <div className="locationSelector">
                <select className="locationDropDown">
                    <option>------SELECT Location------</option>
                </select>
                <select className="reataurantsinput">
                    <option>------SELECT Hotel------</option>
                </select>
            </div>
        </div>
        )
    }
}
export default Search;