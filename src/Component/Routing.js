import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import RegisterComponent from './Admin/Login/RegisterComponent';
import LoginComponent from './Admin/Login/LoginComponent';
import UserList from './Admin/Login/UserList';
import Home from './Home/Home'
import ListingApi from './Listing/listingapi'
import Details from './Details/details'
import PlaceBooking from './Booking/placeBooking'
import Booking from './Booking/viewBooking';
import Admin from './Admin/Home/index';
import Footer from './Footer';


const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={RegisterComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/booking" component={Home}/>
                <Route path="/userlist" component={UserList}/>
                <Route  path="/Admin" component={Admin}/>
                <Route exact path="/list/:id" component={ListingApi}/>
                    <Route  path="/details/:id" component={Details}/>
                    <Route  path="/booking/:id" component={PlaceBooking}/>
                    <Route  path="/viewbooking" component={Booking}/>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Routing;