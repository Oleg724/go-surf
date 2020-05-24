import React, { Component } from 'react';
import './Location.css';

import localIcon from '../../assets/FirstPageLocationIcon/icon_location.svg';

import Image from '../Image/Image';

export default class Location extends Component {
    constructor(props){
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            APIkey: 'd34a7c8db8ab4daf865476bba50aaeb8',
            city: '',
        };
    };

    setPlace = (result) => {
        const { city } = result.results[0].components;
        city && this.setState({ city: city });
    };

    getLocation = () => {
        const { latitude, longitude, APIkey } = this.state;

        const subUrl = `https://api.opencagedata.com/geocode/v1/json?q=
            ${ latitude }+${ longitude }&key=${ APIkey }&language=en`;

        fetch(subUrl)
            .then(response => (response.status !== 200) ? 'error' : response.text())
            .then(data => JSON.parse(data))
            .then(result => this.setPlace(result));
    };


    componentDidMount() { 
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords: { latitude, longitude }} = position;

            this.setState({
                latitude: latitude,
                longitude: longitude,
            });

            this.props.updateLatitude(latitude);
            this.props.updateLongitude(longitude);
            this.getLocation();
        });    
    };

    render() {
        const { city } = this.state;

        const alt = localIcon.split('/')[localIcon.split('/').length - 1];

        const imageProps = {
            image: localIcon, 
            clazz: 'location__icon', 
            alt: alt,
        };

        return (
            <div className="location">

                <Image { ...imageProps } />

                <div className="location__title">
                    { city }
                </div>
            </div>
        );
    };
};