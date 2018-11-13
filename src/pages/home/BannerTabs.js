import React from 'react';

const BannerTabs = () => {
    return (
        <div className="baner-tabs">
            <div className="text-center">
                <div className="drop-tabs">
                    <b>hotels</b>
                    <a href="#" className="arrow-down"><i className="fa fa-angle-down"></i></a>
                    <ul className="nav-tabs tpl-tabs tabs-style-1">
                        <li className="active click-tabs"><a href="#one" data-toggle="tab"
                                                             aria-expanded="false">hotels</a></li>
                        <li className="click-tabs"><a href="#two" data-toggle="tab"
                                                      aria-expanded="false">flights</a></li>
                        <li className="click-tabs"><a href="#three" data-toggle="tab"
                                                      aria-expanded="false">cars</a></li>
                        <li className="click-tabs"><a href="#four" data-toggle="tab"
                                                      aria-expanded="false">CRUISES</a></li>
                        <li className="click-tabs"><a href="#five" data-toggle="tab"
                                                      aria-expanded="false">activities</a></li>
                    </ul>
                </div>
            </div>
            <div className="tab-content tpl-tabs-cont section-text t-con-style-1">
                <div className="tab-pane active in" id="one">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <div className="tabs-block">
                                    <h5>Your Destinationss</h5>
                                    <div className="input-style">
                                        <img src="img/loc_icon_small.png" alt=""/>
                                        <input type="text"
                                               placeholder="Enter a destination or hotel name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                                <div className="tabs-block">
                                    <h5>Check In</h5>
                                    <div className="input-style">
                                        <img src="img/calendar_icon.png" alt=""/>
                                        <input type="text" placeholder="Mm/Dd/Yy"
                                               className="datepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                                <div className="tabs-block">
                                    <h5>Check Out</h5>
                                    <div className="input-style">
                                        <img src="img/calendar_icon.png" alt=""/>
                                        <input type="text" placeholder="Mm/Dd/Yy"
                                               className="datepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Kids</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 kids</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 kids</a>
															<a href="#">02 kids</a>
															<a href="#">03 kids</a>
															<a href="#">04 kids</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Adults</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 adult</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 adult</a>
															<a href="#">02 adult</a>
															<a href="#">03 adult</a>
															<a href="#">04 adult</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Rooms</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 room</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 room</a>
															<a href="#">02 room</a>
															<a href="#">03 room</a>
															<a href="#">04 room</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <a href="#" className="c-button b-60 bg-aqua hv-transparent"><i
                                    className="fa fa-search"></i><span>search now</span></a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <div className="tabs-block">
                                    <h5>Your Destinationss</h5>
                                    <div className="input-style">
                                        <img src="img/loc_icon_small.png" alt=""/>
                                        <input type="text"
                                               placeholder="Enter a destination or flight name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                                <div className="tabs-block">
                                    <h5>Check In</h5>
                                    <div className="input-style">
                                        <img src="img/calendar_icon.png" alt=""/>
                                        <input type="text" placeholder="Mm/Dd/Yy"
                                               className="datepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                                <div className="tabs-block">
                                    <h5>Check Out</h5>
                                    <div className="input-style">
                                        <img src="img/calendar_icon.png" alt=""/>
                                        <input type="text" placeholder="Mm/Dd/Yy"
                                               className="datepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Kids</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 kids</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 kids</a>
															<a href="#">02 kids</a>
															<a href="#">03 kids</a>
															<a href="#">04 kids</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Adults</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 adult</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 adult</a>
															<a href="#">02 adult</a>
															<a href="#">03 adult</a>
															<a href="#">04 adult</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Rooms</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 room</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 room</a>
															<a href="#">02 room</a>
															<a href="#">03 room</a>
															<a href="#">04 room</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <a href="#" className="c-button b-60 bg-aqua hv-transparent"><i
                                    className="fa fa-search"></i><span>search now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="three">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <div className="tabs-block">
                                    <h5>Your Destinationss</h5>
                                    <div className="input-style">
                                        <img src="img/loc_icon_small.png" alt=""/>
                                        <input type="text"
                                               placeholder="Enter a destination or car name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                                <div className="tabs-block">
                                    <h5>Check In</h5>
                                    <div className="input-style">
                                        <img src="img/calendar_icon.png" alt=""/>
                                        <input type="text" placeholder="Mm/Dd/Yy"
                                               className="datepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                                <div className="tabs-block">
                                    <h5>Check Out</h5>
                                    <div className="input-style">
                                        <img src="img/calendar_icon.png" alt=""/>
                                        <input type="text" placeholder="Mm/Dd/Yy"
                                               className="datepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Kids</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 kids</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 kids</a>
															<a href="#">02 kids</a>
															<a href="#">03 kids</a>
															<a href="#">04 kids</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Adults</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 adult</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 adult</a>
															<a href="#">02 adult</a>
															<a href="#">03 adult</a>
															<a href="#">04 adult</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Rooms</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 room</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 room</a>
															<a href="#">02 room</a>
															<a href="#">03 room</a>
															<a href="#">04 room</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <a href="#" className="c-button b-60 bg-aqua hv-transparent"><i
                                    className="fa fa-search"></i><span>search now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="four">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <div className="tabs-block">
                                    <h5>Your Destinationss</h5>
                                    <div className="input-style">
                                        <img src="img/loc_icon_small.png" alt=""/>
                                        <input type="text"
                                               placeholder="Enter a destination or cruise name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                                <div className="tabs-block">
                                    <h5>Check In</h5>
                                    <div className="input-style">
                                        <img src="img/calendar_icon.png" alt=""/>
                                        <input type="text" placeholder="Mm/Dd/Yy"
                                               className="datepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                                <div className="tabs-block">
                                    <h5>Check Out</h5>
                                    <div className="input-style">
                                        <img src="img/calendar_icon.png" alt=""/>
                                        <input type="text" placeholder="Mm/Dd/Yy"
                                               className="datepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Kids</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 kids</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 kids</a>
															<a href="#">02 kids</a>
															<a href="#">03 kids</a>
															<a href="#">04 kids</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Adults</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 adult</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 adult</a>
															<a href="#">02 adult</a>
															<a href="#">03 adult</a>
															<a href="#">04 adult</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Rooms</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 room</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 room</a>
															<a href="#">02 room</a>
															<a href="#">03 room</a>
															<a href="#">04 room</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <a href="#" className="c-button b-60 bg-aqua hv-transparent"><i
                                    className="fa fa-search"></i><span>search now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="five">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <div className="tabs-block">
                                    <h5>Your Destinationss</h5>
                                    <div className="input-style">
                                        <img src="img/loc_icon_small.png" alt=""/>
                                        <input type="text"
                                               placeholder="Enter a destination or activities name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                                <div className="tabs-block">
                                    <h5>Check In</h5>
                                    <div className="input-style">
                                        <img src="img/calendar_icon.png" alt=""/>
                                        <input type="text" placeholder="Mm/Dd/Yy"
                                               className="datepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                                <div className="tabs-block">
                                    <h5>Check Out</h5>
                                    <div className="input-style">
                                        <img src="img/calendar_icon.png" alt=""/>
                                        <input type="text" placeholder="Mm/Dd/Yy"
                                               className="datepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Kids</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 kids</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 kids</a>
															<a href="#">02 kids</a>
															<a href="#">03 kids</a>
															<a href="#">04 kids</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Adults</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 adult</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 adult</a>
															<a href="#">02 adult</a>
															<a href="#">03 adult</a>
															<a href="#">04 adult</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-4">
                                <div className="tabs-block">
                                    <h5>Rooms</h5>
                                    <div className="drop-wrap">
                                        <div className="drop">
                                            <b>01 room</b>
                                            <a href="#" className="drop-list"><i
                                                className="fa fa-angle-down"></i></a>
                                            <span>
															<a href="#">01 room</a>
															<a href="#">02 room</a>
															<a href="#">03 room</a>
															<a href="#">04 room</a>
														</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <a href="#" className="c-button b-60 bg-aqua hv-transparent"><i
                                    className="fa fa-search"></i><span>search now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTabs;