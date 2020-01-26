/* eslint-disable react/style-prop-object */
import React from 'react';
import { FormattedMessage, FormattedDate, FormattedNumber, useIntl } from 'react-intl';

const Card = ({ number, type, data }) => {

    const renderMessage = buildFormattedMessage(type, data);
    const intl = useIntl(); // intl extracted from useIntl hook
    const titleMsg = intl.formatMessage({ id: 'card.type'}, {type:titleType(type, intl)});

    return (
        <div className="card">
            <div className="card-left">
                <span>+</span>
                <h2>{number}</h2>
            </div>
            <div className="card-right">
                <h3 title={titleMsg}>{type}</h3>
                <span>
                    {renderMessage}
                </span>
            </div>
        </div>
    )
};

const titleType = (type, intl) => {
    switch(type){
        case 'number':
            return intl.formatMessage({id: 'title.number'});
        case 'string':
            return intl.formatMessage({id: 'title.string'});
        case 'date':
            return intl.formatMessage({id: 'title.date'});
        case 'plural':
            return intl.formatMessage({id: 'title.plural'});
        default:
            return;
    }
}

const buildFormattedMessage = (type, data) => {
    switch (type) {
        case 'number':
            return (
                <FormattedMessage
                    id='card.number'
                    values={
                        { 
                            data : <FormattedNumber value={data} />,
                            customNumber: <FormattedNumber
                                value={data}
                                style='unit'
                                unit="kilogram"
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
                    values={{ unreadCount: data }}
                />
            );
        default:
            return null;
    }
}

export default Card;