import React from 'react';

const Pagination01 = () => {
    return (
        <div className="c_pagination clearfix padd-120">
            <a href="#" className="c-button b-40 bg-blue-2 hv-blue-2-o fl">prev page</a>
            <a href="#" className="c-button b-40 bg-blue-2 hv-blue-2-o fr">next page</a>
            <ul className="cp_content color-1">
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">...</a></li>
                <li><a href="#">10</a></li>
            </ul>
        </div>
    );
};

export default Pagination01;