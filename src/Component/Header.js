import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    constructor(){
        super()
        this.state={
            username:''
        }
    }
    conditional_header = () => {
        if(sessionStorage.getItem('_ltk')===null||sessionStorage.getItem('_ltk')===undefined  ){
            return(
                <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/">Home</Link></li>
                <li><Link to="/"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
            )     
        }else{
            return(
                <ul className="nav navbar-nav">
                      <li><Link to="/booking">Home</Link></li>
                    <li ><Link to="/userlist">Users</Link></li>
                <li ><Link to="/viewbooking">Booking</Link></li>
                <li><Link to="" ><span className="glyphicon glyphicon-user"></span>Welcome {sessionStorage.getItem('email')}</Link></li>
            </ul>
               
            ) 
        }
        
    }

    render(){
        return(
            <nav className="navbar navbar-inverse" style={{background:'teal'}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                    </button>
                    <Link className="navbar-brand" to="/">!!O!!</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                   
                    <ul className="nav navbar-nav navbar-right">
                        {this.conditional_header()}
                     
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }

    componentDidMount(){
        const code = (this.props.location.search).split('=')[1];
        if(code){
            var requestData={
                code:code
            }
            fetch("http://localhost:3001/user",{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(requestData)
            })
            .then(response => response.json())
            .then((data) => {
                console.log(data)

                sessionStorage.setItem('username',data.login)
                this.setState({username:data.login})
            })
        }
    }
    
}


export default withRouter(Header);