import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const url ="https://developerfunnel.herokuapp.com/location";
const hotelurl ="https://developerfunnel.herokuapp.com/hotels?city=";

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) =>{
                return(
                    <option value={item.city  } key={item.city_name}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    handleChangeCity=(e) => {
        console.log(e.target.value)
        const cityid = e.target.value
        fetch(`${hotelurl}${cityid}`,{method:'GET'})
        .then((response) => response.json())
        .then((data) => {
            this.setState({hotels:data})
        })
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) =>{
                return(
                    <option value={item._id}key={item.city_name}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    handleHotel =(event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }

    render(){
        console.log(">>>>",this.state.location)
        console.log(">>>props>>",this.props)
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleChangeCity}>
                        <option>-----SELECT Location------</option>
                         {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput" onChange={this.handleHotel}  >
                        <option>-----SELECT Hotel------</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json()) //promise of api
        // we will get the data
        .then((data) => {
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default withRouter(Search);