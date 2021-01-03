import React from 'react';

const UserDisplay = (props) => {
    const renderList = ({userData}) => {
        if(userData){
            return userData.map((item,index) => {
                return(
                    <tr>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div className="container">
            <center>
                <h2>List Of Users</h2>
            </center>
            <table className="table">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList(props)}
                </tbody>
            </table>

            <button className="btn btn-success">
                Add New Admin
            </button>
        </div>
    )
}

export default UserDisplay;