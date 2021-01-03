import React,{Component} from 'react';

const burl=`http://localhost:5000/api/auth/login`;

class LoginComponent extends Component{
    constructor(){
        super()

        this.state={
            email:'',
            password:'',
            error:''
        }
    }
    handleChangeEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handleChangePassword = (event) => {
        this.setState({password:event.target.value})
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
        .then((res) => res.json())
        .then((data) => {
            sessionStorage.setItem('_ltk',data.token);
            this.props.history.push('/profile')
        })
        .catch((err) => {
            this.setState({error:"Invalid UserName or Password"})
        })
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                    <h4>Login Component</h4>
                    </div>
                    <h2>{this.state.error}</h2>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Email</label>
                            <input type="text" name="order_id" value={this.state.email} className="form-control"
                            onChange={this.handleChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Password</label>
                            <input type="text" name="order_id" value={this.state.password} className="form-control"
                            onChange={this.handleChangePassword}/>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>Login</button>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default LoginComponent;