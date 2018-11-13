import React from 'react';
import TourBlock01 from "../../components/TourBlock/TourBlock01";

const BestTours = () => {
    return (
        <div className="main-wraper padd-90">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="second-title">
                            <h2>The Best Sea Tours</h2>
                            <p className="color-grey">Curabitur nunc erat, consequat in erat ut, congue bibendum
                                nulla. Suspendisse id tor.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <TourBlock01/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <TourBlock01/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <TourBlock01/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <TourBlock01/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <TourBlock01/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <TourBlock01/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BestTours;