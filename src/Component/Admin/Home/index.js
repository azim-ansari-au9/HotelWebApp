import React from 'react'
import BookingView from '../Booking/adminBookingDisplay';
import Routing from '../Login/Routing';

const Admin =() => {
    return(
        <>
        <h1>Admin Panel</h1>
        <Routing />
        <BookingView />
        </>
    )
}

export default Admin;