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
                            <div className="">
                                
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