import React from 'react';

const Details01 = () => {
    return (
        <div className="detail-block bg-dr-blue">
            <h4 className="color-white">details</h4>
            <div className="details-desc">
                <p className="color-grey-9">Category: <span
                    className="color-white">hotels</span></p>
                <p className="color-grey-9">price: <span className="color-white">$500 / person</span>
                </p>
                <p className="color-grey-9">location: <span className="color-white">paris, france</span>
                </p>
                <p className="color-grey-9">date: <span className="color-white">july 19th to july 29th</span>
                </p>
                <p className="color-grey-9">rate: <span className="fa fa-star color-yellow" />
                    <span className="fa fa-star color-yellow" />
                    <span className="fa fa-star color-yellow" />
                    <span className="fa fa-star color-yellow" />
                    <span className="fa fa-star color-yellow" /></p>
                <p className="color-grey-9">number of people: <span className="color-white">2 adult</span>
                </p>
                <p className="color-grey-9">hotel class: <span className="color-white">4 <span className="fa fa-star color-yellow" /></span></p>
                <p className="color-grey-9">Bed Type: <span className="color-white">Queen Size</span>
                </p>
                <p className="color-grey-9">Cable TV: <span
                    className="color-white">FREE</span></p>
                <p className="color-grey-9">Telephone: <span
                    className="color-white">YES</span></p>
                <p className="color-grey-9">Room Service: <span
                    className="color-white">Included</span></p>
                <p className="color-grey-9">Wireless: <span
                    className="color-white">YES</span></p>
                <p className="color-grey-9">Minibar: <span
                    className="color-white">FREE</span></p>
                <p className="color-grey-9">CANCELLATION: <span
                    className="color-white">STRICT</span></p>
            </div>
            <div className="details-btn">
                <a href="#"
                   className="c-button b-40 bg-tr-1 hv-white"><span>view on map</span></a>
                <a href="#"
                   className="c-button b-40 bg-white hv-transparent"><span>book now</span></a>
            </div>
        </div>
    );
};

export default Details01;