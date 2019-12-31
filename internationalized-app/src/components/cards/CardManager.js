import React from 'react'

import Card from './Card';

const CardManager = () => {
    return (
        <div className="container ">
            <Card
                number='1'
                type='Number'
                description='Displaying 2345678187243 in regional format'
            />
            <Card
                number='2'
                type='Date'
                description='Displaying date 09/12/2019 in regional format'
            />
            <Card
                number='3'
                type='String'
                description='Such as web services, scripts, configurations'
            />
            <Card
                number='4'
                type='Plural'
                description='Web projects and ensure the quality of delivery'
            />
        </div>
    )
}

export default CardManager;