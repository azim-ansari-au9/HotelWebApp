import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css';

const ListingDiplay = (props) => {
    const renderList = ({hotellist}) => {
        if(hotellist){
            if(hotellist.length>0){
                return hotellist.map((item) => {
                    return(
                        <div className="item" id={item.id}>
                                <div className="row">
                                    <div className="col-sm-5">
                                        <img className="Image" src={item.thumb} alt={item.name} />
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="hotel_name">
                                        <Link to={`/details/${item._id}`}>{item.name}</Link></div>
                                        <div className="city_name">{item.city_name}</div>
                                        <div className="address-text">{item.locality}</div>
                                        <div className="address-text">{item.address}</div>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <div class="CUISINES-COST-FOR-TWO">Room Type</div>
                                        <div class="CUISINES-COST-FOR-TWO">COST FOR Night</div>
                                    </div>
                                    <div class="col-sm-9">
                                        <div class="Bakery-700">
                                            {item.type[0].name},{item.type[1].name},{item.type[2].name}</div>
                                        <div class="Bakery-700">Rs {item.cost}</div>
                                    </div>
                                </div>
                            </div>
                    )
                })
            }else{
                return(
                    <div>
                        <h3>No Data Found</h3>
                    </div>
                )
            }
            
        }else{
            return(
                <div>
                    <img src="/images/loader.gif" alt="loader gif" />
                </div>
            )
        }

    }
    return(
        <div className="container-fluid">
            <div className="main-heading">
                <div className="row">
                    <div className="col-md-11">
                        {renderList(props)}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ListingDiplay;