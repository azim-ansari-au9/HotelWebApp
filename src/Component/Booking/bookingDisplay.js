import React from 'react';

const BookingView = (props) => {
    const renderTable = ({bookdata}) => {
        if(bookdata){
            return bookdata.map((item) => {
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.hotelname}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.status}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div className="container">
            <center><h3>Bookings</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Hotel Name</th>
                        <th>User Name</th>
                        <th>Phone</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default BookingView;
