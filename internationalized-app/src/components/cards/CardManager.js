import React from 'react'

import Card from './Card';

const CardManager = () => {

    const cardData = [
        {
            number: 1,
            type: 'Number',
            description: 'Displaying 2345678187243 in regional format'
        },
        {
            number: '2',
            type: 'Date',
            description: 'Displaying date 09/12/2019 in regional format'
        },
        {
            number: '3',
            type: 'String',
            description: 'Such as web services, scripts, configurations'
        },
        {
            number: '4',
            type: 'Plural',
            description: 'Web projects and ensure the quality of delivery'
        }
    ];

    const cardList = cardData.map(card => {
        return (
            <Card
                key={card.number}
                number={card.number}
                type={card.type}
                description={card.description}
            />
        )
    })

    return (
        <div className="container ">
            {cardList}
        </div>
    )
}

export default CardManager;