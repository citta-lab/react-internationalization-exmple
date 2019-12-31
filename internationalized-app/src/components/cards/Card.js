import React from 'react';

const Card = ({ number, type, description }) => {
    return (
        <div className="card">
            <div className="card-left">
                <span>+</span>
                <h2>{number}</h2>
            </div>
            <div className="card-right">
                <h3>{type}</h3>
                <span>{description}</span>
            </div>
        </div>
    )
};

export default Card;