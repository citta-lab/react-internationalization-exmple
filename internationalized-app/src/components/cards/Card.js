import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';

const Card = ({ number, type, data }) => {

    const renderMessage = buildFormattedMessage(type, data);

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

const buildFormattedMessage = (type, data) => {
    switch (type) {
        case 'number':
            return (
                <FormattedMessage
                    id='card.number'
                    defaultMessage={`Displaying {data} number in regional format`}
                    values={{ data }}
                />
            );
        case 'string':
            return (
                <FormattedMessage
                    id='card.string'
                    defaultMessage={`Displaying {data} string in regional format`}
                    values={{ data }}
                />
            );
        case 'date':

            const testDate = <FormattedDate value={new Date(1459832991883)} />;
            console.log(testDate);
            console.log(data)

            return (
                <FormattedMessage
                    id='card.date'
                    defaultMessage={`Example of displaying {data} date in regional format`}
                    values={{ data: <FormattedDate
                        value={new Date(data)}
                        year="numeric"
                        month="long"
                        day="2-digit"
                      /> }}
               />
            );
        case 'plural':
            return (
                <FormattedMessage
                    id='card.plural'
                    defaultMessage={`One more example of displaying {data} plural scenatio in regional format`}
                    values={{ data }}
                />
            );
        default:
            return null;
    }
}

export default Card;