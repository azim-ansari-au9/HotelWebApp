import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Listing from './Listing/listingapi';
// import details from './Details/details';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path='/' component={Home} /> 
                <Route path='/list/:id' component={Listing} /> 
                <Route path='/details/:id' component={listingapi} /> 
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Routing;