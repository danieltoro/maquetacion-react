import React from 'react';

const ListItem04 = () => {
    return (
        <div className="list-item-entry">
            <div className="hotel-item style-10 bg-white">
                <div className="table-view">
                    <div className="radius-top cell-view">
                        <img src="../../img/tour_list/flight_grid_1.jpg" alt=""/>
                    </div>
                    <div className="title hotel-middle cell-view">
                        <h5>from <strong className="color-red-3">$860</strong> / person</h5>
                        <h6 className="color-grey-3 list-hidden">one way flights</h6>
                        <h4><b>Cheap Flights to Paris</b></h4>
                        <p className="list-hidden">Book now and <span className="color-red-3">save 30%</span></p>
                        <div className="fi_block grid-hidden row row10">
                            <div className="flight-icon col-xs-6 col10">
                                <img className="fi_icon" src="../../img/tour_list/flight_icon_2.png" alt=""/>
                                    <div className="fi_content">
                                        <div className="fi_title color-dark-2">take off</div>
                                        <div className="fi_text color-grey">wed nov 13, 2013 7:50 am</div>
                                    </div>
                            </div>
                            <div className="flight-icon col-xs-6 col10">
                                <img className="fi_icon" src="../../img/tour_list/flight_icon_1.png" alt=""/>
                                    <div className="fi_content">
                                        <div className="fi_title color-dark-2">take off</div>
                                        <div className="fi_text color-grey">wed nov 13, 2013 7:50 am</div>
                                    </div>
                            </div>
                        </div>
                        <a href="#" className="c-button b-40 bg-red-3 hv-red-3-o">book now</a>
                        <a href="#" className="c-button b-40 color-grey-3 hv-o fr"><img src="../../img/flag_icon_grey.png"
                                                                                        alt=""/>view more</a>
                    </div>
                    <div className="title hotel-right clearfix cell-view grid-hidden">
                        <div className="hotel-right-text color-dark-2">one way flights</div>
                        <div className="hotel-right-text color-dark-2">1 stop</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItem04;