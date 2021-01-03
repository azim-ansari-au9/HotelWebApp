import React,{Component} from 'react';
import BookingDisplay from './bookingDisplay';
import axios from 'axios';

const burl="http://localhost:8900/bookings";

class Booking extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div className="container">
                <BookingDisplay bookdata={this.state.booking}/>
            </div>
        )
    }

    async componentDidMount(){
        const response = await axios.get(burl);
        this.setState({booking:response.data})
    }
}

export default Booking;