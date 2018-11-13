import React from 'react';

const ListItem02 = () => {
    return (
        <div className="list-item-entry">
            <div className="hotel-item style-8 bg-white">
                <div className="table-view">
                    <div className="radius-top cell-view">
                        <img src="../../img/tour_list/hotel_grid_1.jpg" alt=""/>
                        <div className="price price-s-3 red tt">hot price</div>
                    </div>
                    <div className="title hotel-middle clearfix cell-view">
                        <div className="hotel-person color-dark-2 list-hidden">from <span>$273</span></div>
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
                        <h4><b>Luxury madrid Hotel</b></h4>
                        <span className="f-14 color-dark-2 grid-hidden">2 Place de la Sans Défense, Puteaux</span>
                        <p className="f-14">Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa
                            idporta nequetiam.</p>
                        <div className="hotel-icons-block grid-hidden">
                            <img className="hotel-icon" src="../../img/tour_list/hotel_icon_1.png" alt=""/>
                            <img className="hotel-icon" src="../../img/tour_list/hotel_icon_2.png" alt=""/>
                            <img className="hotel-icon" src="../../img/tour_list/hotel_icon_3.png" alt=""/>
                            <img className="hotel-icon" src="../../img/tour_list/hotel_icon_4.png" alt=""/>
                            <img className="hotel-icon" src="../../img/tour_list/hotel_icon_5.png" alt=""/>
                        </div>
                        <a href="#" className="c-button bg-dr-blue hv-dr-blue-o b-40 fl list-hidden">select</a>
                        <a href="#" className="c-button color-dr-blue hv-o b-40 fr list-hidden">
                            <img src="img/loc_icon_small_drak.png" alt="" />view on map
                        </a>
                    </div>
                    <div className="title hotel-right bg-dr-blue clearfix cell-view">
                        <div className="hotel-person color-white">from <span>$703</span></div>
                        <a className="c-button b-40 bg-white color-dark-2 hv-dark-2-o grid-hidden" href="#">view
                            more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItem02;