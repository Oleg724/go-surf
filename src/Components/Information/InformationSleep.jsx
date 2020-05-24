import React, { Component } from 'react';
import './Information.css';

import InformationItem from '../InformationItem/InformationItem';
import InformationName from '../InformationName/InformationName';
import InformationCounter from '../InformationCounter/InformationCounter';
import InformationPrice from '../InformationPrice/InformationPrice';

import Record from '../Record/Record';

export default class InformationSleep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nights: 1,
            guests: 1,
        }
    };

    addNightsNumber = () => {
        this.setState(prevState => ({ nights: prevState.nights + 1 }));
    };

    subtractNightsNumber = () => {
        this.state.nights !== 0
            && this.setState(prevState => ({ nights: prevState.nights - 1 }));
    };

    addGuestsNumber = () => {
        this.setState(prevState => ({ guests: prevState.guests + 1 }));
    };

    subtractGuestsNumber = () => {
        this.state.guests !== 0
            && this.setState(prevState => ({ guests: prevState.guests - 1 }));
    };

    render() {
        const { beachList, idx } = this.props;
        const { nights: numberOfNights, guests: numberOfGuests } = this.state;
        const { country } = beachList[idx];
        
        const sleepInfo = { ...beachList[idx].information[1] };

        let animationTimeout = 0;

        return(
            <div className="information">
                {Object.entries(sleepInfo).map( ([ keyName, value ], index) => {

                    const nightCounterText = `${ numberOfNights } ${ keyName.split(' ').pop() }`;
                    const guestCounterText = `${ numberOfGuests } ${ keyName.split(' ').pop() }`;
                    const totalPrice = index === 3 && numberOfNights * numberOfGuests * value[1];

                    const informationName = (
                        <InformationName>
                            <Record text={ value } clazz={ 'information__text' } />
                            <Record text={ country } clazz={ 'information__text' } />
                        </InformationName> );

                    const informationNightsCounter = (
                        <InformationCounter text={ nightCounterText }
                            add={ () => this.addNightsNumber() } 
                            subtract={ () => this.subtractNightsNumber() } />);

                    const informationGuestsCounter = (
                        <InformationCounter text={ guestCounterText }
                            add={ () => this.addGuestsNumber() } 
                            subtract={ () => this.subtractGuestsNumber() } />);

                    const informationPrice = <InformationPrice value={ value } total={ totalPrice } />;

                    const informationItemProps = {
                        title: keyName,
                        index: index,
                        timeout: animationTimeout,
                        key: keyName,
                    };
                  
                    animationTimeout += .3;

                    return (
                        <InformationItem { ...informationItemProps } >  
                            { index === 0 && informationName }
                            { index === 1 && informationNightsCounter }
                            { index === 2 && informationGuestsCounter }
                            { index === 3 && informationPrice }  
                        </InformationItem>                         
                    )
                })} 
            </div>
        );
    };
};