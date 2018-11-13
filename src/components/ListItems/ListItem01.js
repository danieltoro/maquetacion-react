import React from 'react';

const ListItem01 = () => {
    return (
        <div className="list-item-entry">
            <div className="hotel-item style-3 bg-white">
                <div className="table-view">
                    <div className="radius-top cell-view">
                        <img src="../../img/tour_list/tour_grid_1.jpg" alt=""/>
                    </div>
                    <div className="title hotel-middle clearfix cell-view">
                        <div className="date list-hidden">July <strong>19th</strong> to
                            July <strong>26th</strong></div>
                        <div className="date grid-hidden"><strong>19.07 - 26.07 /
                            7</strong> night
                        </div>
                        <h4><b>tours in greece</b></h4>
                        <div className="rate-wrap">
                            <div className="rate">
                                <span className="fa fa-star color-yellow"/>
                                <span className="fa fa-star color-yellow"/>
                                <span className="fa fa-star color-yellow"/>
                                <span className="fa fa-star color-yellow"/>
                                <span className="fa fa-star color-yellow"/>
                            </div>
                            <i>485 rewies</i>
                        </div>
                        <p className="f-14 grid-hidden">Nunc cursus libero purus ac congue
                            arcu cur sus ut sed vitae pulvinar. Nunc cursus libero purus ac
                            congue arcu.</p>
                    </div>
                    <div className="title hotel-right clearfix cell-view">
                        <div className="hotel-person color-dark-2">from <span
                            className="color-blue">$273</span> person
                        </div>
                        <a className="c-button b-40 bg-blue hv-blue-o grid-hidden" href="#">view
                            more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItem01;