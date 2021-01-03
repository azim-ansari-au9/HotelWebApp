import React,{Component} from 'react';
import axios from 'axios';

const rurl = "https://developerfunnel.herokuapp.com/hotellist";

class RoomFilter extends Component{
    filterLogic = (event) => {
        let roomNumber = event.target.value;
        let tripId = sessionStorage.getItem('tripid');
        let roomurl;
        if(roomNumber===""){
            roomurl = `${rurl}/${tripId}`
        }else{
            roomurl = `${rurl}/${tripId}?roomtype=${roomNumber}`
        }
        axios.get(roomurl)
            .then((response) => {this.props.hotelperRoom(response.data)})
        
    }
    render(){
        return(
            <React.Fragment>
                <h3><center>Room Filter</center></h3> <hr/>
                <div onChange={this.filterLogic}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="room"/>Deluxe Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="room"/>Premium Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="room"/>Travel Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="room"/>Semi Delux Room
                    </label>
                </div>
            </React.Fragment>
        )
    }
}


export default RoomFilter