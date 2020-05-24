import React from 'react';
import './Information.css';

import InformationItem from '../InformationItem/InformationItem';
import InformationName from '../InformationName/InformationName';
import InformationPrice from '../InformationPrice/InformationPrice';
import Record from '../Record/Record';

const InformationTravel = ({ beachList, idx }) => {

    let animationTimeout = 0;

    const travelInfo = { ...beachList[idx].information[0] };

    return(
        <div className="information">
            { Object.entries(travelInfo).map( ([keyName, value], index, arr) => {

                animationTimeout += .3;

                const informationItemProps = {
                    title: keyName,
                    index: index,
                    timeout: animationTimeout,
                    key: index,
                };

                return (

                    <InformationItem { ...informationItemProps }>
                        {index === arr.length - 1 
                                ? <InformationPrice value={ value }/>
                                : (
                                    <InformationName>
                                        <Record text={ value } clazz={ 'information__text' } />
                                    </InformationName>
                                )}
                    </InformationItem>
                )
            })}  
        </div>
    );
};

export default InformationTravel;