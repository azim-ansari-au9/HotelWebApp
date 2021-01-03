import React from 'react';
import './QkSearch.css';
import {Link} from 'react-router-dom';
import myObj from './abc';


const QuickSearch = (props) => {

    console.log(myObj.users)
    const listTrip = ({tripdata}) => {
        if(tripdata){
            return tripdata.map((item) => {
                return(
                    <Link key={item.name} to={`/list/${item.trip}` }>
                        <div className="tileContainer" >
                            <div className="tileComponent1">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start your {item.name} trip with us.
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    QuickSearch
                </p>
                <p className="quickSearchSubHeading">
                    Discover Trip By Type
                </p>
                <br/>
                {listTrip(props)}
            </div>
        </div>
    )
}

export default QuickSearch;