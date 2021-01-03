import React,{Component} from 'react';

const burl="http://localhost:5000/api/auth/register";

class RegisterComponent extends Component{
    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    handleChangeName = (event) => {
        this.setState({name:event.target.value})
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
        .then(this.props.history.push('/login'))
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                    <h4>Register Component</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Name</label>
                            <input type="text" name="order_id" value={this.state.name} className="form-control"
                            onChange={this.handleChangeName}/>
                        </div>
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
                        <button className="btn btn-success" onClick={this.handleSubmit}>Register</button>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default RegisterComponent;