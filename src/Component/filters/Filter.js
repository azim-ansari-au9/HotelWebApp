import React,{Component} from 'react';
import axios from 'axios';

const rurl = "https://developerfunnel.herokuapp.com/hotellist";

class Filter extends Component{
    filterLogic = (event) => {
        let costRange = event.target.value;
        let tripId = sessionStorage.getItem('tripid');
        let costurl;
        if(costRange===""){
            costurl = `${rurl}/${tripId}`
        }else{
            costurl = `${rurl}/${tripId}?hcost=${costRange}`
        }
        axios.get(costurl)
            .then((response) => {this.props.hotelperCost(response.data)})
        
    }
    render(){
        return(
            <React.Fragment>
                 <h3><center>Cost Filter</center></h3> <hr/>
                <div onChange={this.filterLogic}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1500&lcost=500" name="room"/>500Rs -1500rs
                    </label>
                    <label className="radio">
                        <input type="radio" value="3000&lcost=1499" name="room"/>1500Rs -3000Rs
                    </label>
                    <label className="radio">
                        <input type="radio" value="5000&lcost=2999" name="room"/>3000Rs - 5000Rs
                    </label>
                    <label className="radio">
                        <input type="radio" value="lcost=5000" name="room"/> 5000Rs ABOVE
                    </label>
                </div>
            </React.Fragment>
        )
    }
}


export default Filter