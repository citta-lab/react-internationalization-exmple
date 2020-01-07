import React from 'react'

import Card from './Card';

const CardManager = () => {

    /**
     * Let us imagine we are fetching this data from API or database. To keep this
     * topic focused, I have created array of objects which can be used in our card
     * components.
     */
    const cardData = [
        {
            number: 1,
            type: 'number',
            value: '2345678187243'
        },
        {
            number: '2',
            type: 'date',
            value: '09/12/2019'
        },
        {
            number: '3',
            type: 'string',
            value: ''
        },
        {
            number: '4',
            type: 'plural',
            value: '100'
        }
    ];

    const cardList = cardData.map(card => {
        return (
            <Card
                key={card.number}
                number={card.number}
                type={card.type}
                data={card.value}
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