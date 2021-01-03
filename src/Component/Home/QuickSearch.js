import React, { Component } from 'react';
import QuickDisplay from './QuickDisplay';
import './QuickSearch.css';


const QuickUrl="https://developerfunnel.herokuapp.com/booking";


class QuickSearch extends Component{
    constructor(){
        super()

        this.state = {
            tripType:""
        }
    }
    render(){
        return(
            <div>
                <QuickDisplay tripdata={this.state.tripType} />
            </div>
            )
    }
    componentDidMount(){
        fetch(QuickUrl,{method:"GET"})
        .then((res)=>res.json())
        .then((data) =>{
            this.setState({tripType:data})
        })
    }
}
export default QuickSearch;