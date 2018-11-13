import React from 'react';

const HeaderDetails = () => {
    return (
        <div className="detail-header">
            <div className="row">
                <div className="col-xs-12 col-sm-8">
                    <div className="detail-category color-grey-3">2 Place de la Sans Défense, Puteaux,
                        Paris, France.
                    </div>
                    <h2 className="detail-title color-dark-2">paris International Hotel</h2>
                    <div className="detail-rate rate-wrap clearfix">
                        <div className="rate">
                            <span className="fa fa-star color-yellow"/>
                            <span className="fa fa-star color-yellow"/>
                            <span className="fa fa-star color-yellow"/>
                            <span className="fa fa-star color-yellow"/>
                            <span className="fa fa-star color-yellow"/>
                        </div>
                        <i>485 Rewies</i>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="detail-price color-dark-2">price from <span
                        className="color-dr-blue"> $200</span> /person
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderDetails;