import React from 'react';
import { FormattedMessage } from 'react-intl';

const Card = ({ number, type, value }) => {

    const renderMessage = buildFormattedMessage(type, value);

    return (
        <div className="card">
            <div className="card-left">
                <span>+</span>
                <h2>{number}</h2>
            </div>
            <div className="card-right">
                <h3>{type}</h3>
                <span>
                    {renderMessage}
                </span>
            </div>
        </div>
    )
};

const buildFormattedMessage = (type, value) => {
    switch (type) {
        case 'number':
            return (
                <FormattedMessage
                    id='card.number'
                    defaultMessage={`Displaying {value} number in regional format`}
                    values={{ value }}
                />
            );
        case 'string':
            return (
                <FormattedMessage
                    id='card.string'
                    defaultMessage={`Displaying {value} string in regional format`}
                    values={{ value }}
                />
            );
        case 'date':
            return (
                <FormattedMessage
                    id='card.date'
                    defaultMessage={`Example of displaying {value} date in regional format`}
                    values={{ value }}
                />
            );
        case 'plural':
            return (
                <FormattedMessage
                    id='card.plural'
                    defaultMessage={`One more example of displaying {value} plural scenatio in regional format`}
                    values={{ value }}
                />
            );
        default:
            return null;
    }
}

export default Card;