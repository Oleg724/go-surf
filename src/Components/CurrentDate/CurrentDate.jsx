import React, { Component } from 'react';
import './CurrentDate.css';

import Record from '../Record/Record';

class CurrentDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: '',
            currentMonth: '',
            currentYear: '',
        }
    }

    getCurrentDate = () => {
        let today = new Date();
        let [day, month, year] = [today.getDate(), today.getMonth(), today.getFullYear()];
        this.setState({
            currentDay: day,
            currentMonth: month,
            currentYear: year,
        });
    }

    componentDidMount() {
        this.getCurrentDate();
    }

    render() {

        const { currentDay: currDay, currentMonth, currentYear } = this.state;
        
        const day = currDay < 10 ? `0${ currDay }` : currDay;

        const currMonth = currentMonth + 1;
        const month = currMonth < 10 ? `0${ currMonth }` : currMonth;

        return (
            <div className="date">

                <Record clazz={ 'date__item' } text={ day } />
                <Record clazz={ 'date__item' } text={ month } />
                <Record clazz={ 'date__item' } text={ currentYear } />

            </div>
        );
    };
};

export default CurrentDate;