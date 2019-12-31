import React from 'react';

const Cards = () => {
    return (
        <div>
            <div className="container ">
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

                <div className="card">
                    <div className="card-left">
                        <span>+</span>
                        <h2>2</h2>
                    </div>
                    <div className="card-right">
                        <h3>Date</h3>
                        <span>Displaying date 09/12/2019 in regional format</span>
                    </div>
                </div>

                <div className="card">
                    <div className="card-left">
                        <span>+</span>
                        <h2>3</h2>
                    </div>
                    <div className="card-right">
                        <h3>String</h3>
                        <span>Such as web services, scripts, configurations</span>
                    </div>
                </div>

                <div className="card">
                    <div className="card-left">
                        <span>+</span>
                        <h2>4</h2>
                    </div>
                    <div className="card-right">
                        <h3>Plural</h3>
                        <span>Web projects and ensure the quality of delivery</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cards;