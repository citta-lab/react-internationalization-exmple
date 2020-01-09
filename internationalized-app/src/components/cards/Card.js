/* eslint-disable react/style-prop-object */
import React from 'react';
import { FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl';

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
                    defaultMessage={`Around {data} (male) elderly people lived in 2018 around the World & weight about {customNumber}`}
                    values={
                        { 
                            data : <FormattedNumber value={data} />,
                            customNumber: <FormattedNumber
                                value={data}
                                style='unit'
                                unit="kilobyte"
                                unitDisplay="narrow"
                            />

                        }
                    }
                />
            );
        case 'string':
            return (
                <FormattedMessage
                    id='card.string'
                    defaultMessage={`I was thinking to buying a new vehicle in {date}, so I looked at my financial information and found out I already owe {money} to the bank.`}
                    values={
                        {   
                            date: <FormattedDate value={data.date}/>,
                            money: <FormattedNumber 
                              value={data.money}
                              style="currency"
                              currency={'GBP'}
                            /> 
                        }
                    }
                />
            );
        case 'date':
            return (
                <FormattedMessage
                    id='card.date'
                    defaultMessage={`On {data} the first ever Mustang car was introduced to the public in america. Which is {customDate}.`}
                    values={
                        { 
                            data: <FormattedDate value={data} />, 
                            customDate: <FormattedDate 
                                value={data}
                                year="numeric"
                                month="long"
                                day="2-digit"
                            />
                        }
                    }
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