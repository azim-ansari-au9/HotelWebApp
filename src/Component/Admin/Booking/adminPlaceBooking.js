import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const burl="http://localhost:8900/bookings";

class placebooking extends Component{
    constructor(){
        super()

        this.state={
            id:Math.floor(Math.random()*10000),
            hotelname: sessionStorage.getItem('hotelname'),
            name:sessionStorage.getItem('username'),
            phone:'',
            status:"Pending"
        }
    }

    handleChangeName = (event) => {
        this.setState({name:event.target.value})
    }
    handleChangePhone = (event) => {
        this.setState({phone:event.target.value})
    }
    handleSubmit =() => {
        console.log(this.state)
        fetch(burl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/viewbooking'))
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                    <h4>Booking for Hotel {this.state.hotelname}</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Order_Id:</label>
                            <input type="text" name="order_id" value={this.state.id} readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Hotel_Name</label>
                            <input type="text" name="order_id" value={this.state.hotelname} readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Name</label>
                            <input type="text" name="order_id" value={this.state.name} className="form-control"
                            onChange={this.handleChangeName}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Phone</label>
                            <input type="text" name="order_id" value={this.state.phone} className="form-control"
                            onChange={this.handleChangePhone}/>
                        </div>
                        <Link to="/" className="btn btn-danger">Cancel</Link> &nbsp;
                        <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default placebooking;