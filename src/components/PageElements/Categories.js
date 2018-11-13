import React from 'react';

const Categories = () => {
    return (
        <div className="sidebar-block">
            <h4 className="sidebar-title color-dark-2">categories</h4>
            <ul className="sidebar-category color-1">
                <li className="active">
                    <a className="cat-drop" href="#">tours <span className="fr">(68)</span></a>
                    <ul>
                        <li><a href="#">sea tours (785)</a></li>
                        <li><a href="#">food tours (85)</a></li>
                        <li><a href="#">romantic tours (125)</a></li>
                        <li><a href="#">honeymoon tours (70)</a></li>
                        <li><a href="#">mountain tours (159)</a></li>
                    </ul>
                </li>
                <li>
                    <a className="cat-drop" href="#">hotels <span
                        className="fr">(125)</span></a>
                    <ul>
                        <li><a href="#">sea tours (785)</a></li>
                        <li><a href="#">food tours (85)</a></li>
                        <li><a href="#">romantic tours (125)</a></li>
                        <li><a href="#">honeymoon tours (70)</a></li>
                        <li><a href="#">mountain tours (159)</a></li>
                    </ul>
                </li>
                <li>
                    <a className="cat-drop" href="#">cruises <span
                        className="fr">(75)</span></a>
                    <ul>
                        <li><a href="#">sea tours (785)</a></li>
                        <li><a href="#">food tours (85)</a></li>
                        <li><a href="#">romantic tours (125)</a></li>
                        <li><a href="#">honeymoon tours (70)</a></li>
                        <li><a href="#">mountain tours (159)</a></li>
                    </ul>
                </li>
                <li>
                    <a className="cat-drop" href="#">flights <span
                        className="fr">(93)</span></a>
                    <ul>
                        <li><a href="#">sea tours (785)</a></li>
                        <li><a href="#">food tours (85)</a></li>
                        <li><a href="#">romantic tours (125)</a></li>
                        <li><a href="#">honeymoon tours (70)</a></li>
                        <li><a href="#">mountain tours (159)</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Categories;