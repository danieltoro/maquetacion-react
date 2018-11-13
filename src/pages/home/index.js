import React, {Component} from 'react';

import PopularTravelCountries from "./PopularTravelCountries";
import SpecialOffers from "./SpecialOffers";
import BeautifulTrips from "./BeautifulTrips";
import BestTours from "./BestTours";
import TopBanner from "./TopBanner";

class Index extends Component {
    render() {
        return (
            <div>
                <TopBanner/>
                <BestTours/>
                <BeautifulTrips/>
                <SpecialOffers/>
                <PopularTravelCountries/>
            </div>
        );
    }
}

export default Index;