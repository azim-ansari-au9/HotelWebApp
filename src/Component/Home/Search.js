import React, { Component } from 'react';
import './Search.css';
const url ="https://developerfunnel.herokuapp.com/location"

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:""
        }
    }
    renderCity= (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value="city">
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    render(){
        console.log(">",this.state.location)
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
                    {this.renderCity(this.state.location)}
                </select>
                <select className="reataurantsinput">
                    <option>------SELECT Hotel------</option>
                </select>
            </div>
        </div>
        )
    }
      componentDidMount() {
          fetch(url,{mehtod:"GET"})
          .then((res) => res.json())
          .then((data) => {
                this.setState({location:data})
          })
          .catch((err) => {
              console.log(err)
          })
      }
          
}
export default Search;