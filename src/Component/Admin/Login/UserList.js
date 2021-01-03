import React,{Component} from 'react';
import UserDisplay from './UserDisplay';

const url = "http://localhost:5000/api/auth/users";

class UserList extends Component{
    constructor(){
        super()

        this.state={
            users:''
        }
    }

    render(){
        if(sessionStorage.getItem('_ltk') == null){
            this.props.history.push('/login')
        }
        if(sessionStorage.getItem('_ltk') !== null && sessionStorage.getItem('_rtk') !== "Admin"){
            this.props.history.push('/profile?message=You Are Not Admin')
        }
        return(
            <UserDisplay userData={this.state.users}/>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {this.setState({users:data})})
    }

}

export default UserList;