import React,{Component} from 'react';

const url = "http://localhost:5000/api/auth/userinfo";

class Profile extends Component{
    constructor(){
        super()

        this.state={
            user:'',
            error:''
        }
    }

    handleLogout=() => {
        sessionStorage.removeItem('_ltk');
        sessionStorage.removeItem('_rtk');
        this.props.history.push('/login')
    }

    render(){
        if(sessionStorage.getItem('_ltk') == null){
            this.props.history.push('/login')
        }
        sessionStorage.setItem('_rtk',this.state.user.role)
        return(
            <div className="container">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        User Display
                        <h2>{this.state.error}</h2>
                    </div>
                    <div className="panel-body">
                        <h1>Hi {this.state.user.name}</h1>
                        <h2>Your Email Id is {this.state.user.email}</h2>
                        <h2>Your Role is {this.state.user.role}</h2>
                    </div>
                    <button className="btn btn-danger"
                    onClick={this.handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('_ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })

        if(this.props){
            this.setState({error:this.props.location.search.split('=')[1]})
        }
    }
}


export default Profile