import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickSearch = (props) => {
    const listTrip=({tripdata}) => {
        if (tripdata){
            return tripdata.map((item) =>{
                return(
                    <Link to="/">
                        <div className='tileContainer'>
                            <div className="tileComponent1">
                                <img src={item.image} />
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Let's Go {item.name} tour with Organization.
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
                    Found Trip By Type.
                </p>
                <br />
                {listTrip(props)}
            </div>
        </div>
    )
}

export default QuickSearch;