import React, {Component} from 'react';

import Search from '../../components/PageElements/Search';
import Categories from '../../components/PageElements/Categories';
import PriceRange from '../../components/PageElements/PriceRange';
import StarRating from '../../components/PageElements/StarRating';
import Facility from '../../components/PageElements/Facility';
import ReviewScore from "../../components/PageElements/ReviewScore";

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar bg-white clearfix">
                <Search/>
                <Categories/>
                <PriceRange/>
                <StarRating/>
                <Facility/>
                <ReviewScore/>
            </div>
        );
    }
}

export default Sidebar;