import React from 'react';

const ListItem03 = () => {
    return (
        <div className="list-item-entry">
            <div className="hotel-item style-9 bg-white">
                <div className="table-view">
                    <div className="radius-top cell-view">
                        <img src="../../img/tour_list/cruise_grid_1.jpg" alt=""/>
                        <div className="price price-s-4">$600</div>
                    </div>
                    <div className="title hotel-middle cell-view">
                        <div className="tour-info-line clearfix">
                            <div className="tour-info fl">
                                <img src="../../img/calendar_icon_grey.png" alt=""/>
                                    <span className="font-style-2 color-grey-3">July <strong>19th 2015</strong></span>
                            </div>
                            <div className="tour-info fl">
                                <img src="../../img/loc_icon_small_grey.png" alt=""/>
                                    <span className="font-style-2 color-grey-3">alaska</span>
                            </div>
                        </div>
                        <h4><b>ASIA CRUISES</b></h4>
                        <div className="rate-wrap list-hidden">
                            <div className="rate">
                                <span className="fa fa-star color-yellow"/>
                                <span className="fa fa-star color-yellow"/>
                                <span className="fa fa-star color-yellow"/>
                                <span className="fa fa-star color-yellow"/>
                                <span className="fa fa-star color-yellow"/>
                            </div>
                            <i>485 rewies</i>
                        </div>
                        <p className="f-14 color-grey-3">San Juan, Charlotte Amalie, Philipsburg, Castries, Basseterre,
                            Ponta Delgada, Southampton.</p>
                        <div className="buttons-block bg-dr-blue-2">
                            <a href="#" className="c-button b-40 bg-grey-3-t hv-grey-3-t b-1">detail</a>
                            <a href="#" className="c-button b-40 bg-white hv-transparent fr">book now</a>
                        </div>
                    </div>
                    <div className="title hotel-right clearfix cell-view grid-hidden">
                        <div className="rate-wrap">
                            <i>485 rewies</i>
                            <div className="rate">
                                <span className="fa fa-star color-yellow"/>
                                <span className="fa fa-star color-yellow"/>
                                <span className="fa fa-star color-yellow"/>
                                <span className="fa fa-star color-yellow"/>
                                <span className="fa fa-star color-yellow"/>
                            </div>
                        </div>
                        <div className="hotel-person color-dark-2">from <span className="color-blue">$755</span> person
                        </div>
                        <img className="hotel-right-logo" src="../../img/tour_list/cruise_logo_1.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItem03;