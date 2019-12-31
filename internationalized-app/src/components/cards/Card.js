import React from 'react';

const Card = ({ number, type, description }) => {
    return (
        <div className="card">
            <div className="card-left">
                <span>+</span>
                <h2>1</h2>
            </div>
            <div className="card-right">
                <h3>Number</h3>
                <span>Displaying 2345678187243 in regional format </span>
            </div>
        </div>
    )
};

export default Card;