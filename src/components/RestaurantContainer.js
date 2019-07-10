import React, { Component } from 'react';
import RestaurantList from './RestaurantList';
import {checkStatus, parseJSON} from '../utilities/index';
import UserInput from './UserInput';

class RestaurantContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants : [],
            city: '',
            hasError: false
        };

        this.fetchRestaurants = this.fetchRestaurants.bind(this);
        this.updateCity = this.updateCity.bind(this);
    }
    
    fetchRestaurants (city) {
        let url = "http://opentable.herokuapp.com/api/restaurants?city=" + city;

        fetch(url)
            .then(checkStatus)
            .then(parseJSON)
            .then(data => this.setState({ restaurants: data.restaurants, hasError: false }))
            .catch(error => this.setState({ hasError: true }));
    }

    updateCity(city){
        this.setState({city : city});
        this.fetchRestaurants(city);
    }

    render() {
        return (
            <div>
                <div>
                    <UserInput onCitySubmit={this.updateCity}/>
                </div>
                <div>
                    <RestaurantList restaurants={this.state.restaurants} hasError={this.state.hasError}/>
                </div>
            </div>
        )
  }
}
export default RestaurantContainer;