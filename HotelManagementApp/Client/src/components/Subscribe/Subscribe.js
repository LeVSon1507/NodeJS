import React from "react";
import './Subscribe.css';

function Subscribe() {
    return (
        <div className="container">
            <div className="subscribeWrap">
                <h1 className="title">Save time, save money!</h1>
                <p className="subtitle">Sign up and we'll send the best deals to you</p>
                <div className="inputAndBtn">
                    <input type="email" className="inputEmail" placeholder="Your email" />
                    <button className="btnSubscribe">Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
