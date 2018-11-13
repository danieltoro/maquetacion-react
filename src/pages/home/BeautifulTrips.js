import React from 'react';
import PhotoBlock from "../../components/PhotoBlock/PhotoBlock";

const BeautifulTrips = () => {
    return (
        <div className="main-wraper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="second-title">
                            <h2>Beautiful Trips</h2>
                            <p className="color-grey">Curabitur nunc erat, consequat in erat ut, congue bibendum
                                nulla</p>
                        </div>
                    </div>
                </div>
                <div className="row col-no-padd">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <PhotoBlock/>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <PhotoBlock/>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <PhotoBlock/>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <PhotoBlock/>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <PhotoBlock/>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <PhotoBlock/>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <PhotoBlock/>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <PhotoBlock/>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <PhotoBlock/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeautifulTrips;