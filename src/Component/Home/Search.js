import React, { Component } from 'react';
import './Search.css';
const url ="https://developerfunnel.herokuapp.com/location";
const hotelurl = "https://developerfunnel.herokuapp.com/hotels?city=";
class Search extends Component{
    constructor(){
        super()

        this.state={
            location:"",
            hotels:""
        }
    }
    renderCity= (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    changeCity=(e)=>{
        console.log(e.target.value)
        const cityid = e.target.value;
        fetch(`${hotelurl}${cityid}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.locality}
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
                !0!
            </div>
            <div className="heading">
                Plan for a tour
            </div>
            <div className="locationSelector">
                <select className="locationDropDown" onChange={this.changeCity}>
                    <option>------SELECT Location------</option>
                    {this.renderCity(this.state.location)}
                </select>
                <select className="reataurantsinput">
                    <option>------SELECT Hotel------</option>
                    {this.renderHotel(this.state.hotels)}
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