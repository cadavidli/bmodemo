import React, { Component } from 'react';

class RestaurantList extends Component {
	render() {
        const restaurants = this.props.restaurants || [];
        const hasError = this.props.hasError;

        if (hasError || restaurants.length === 0) {
            return (<div><h2>No restaurants available</h2></div>);
        }

		return (
			<div>
                <h2>Restaurants:</h2>
				<ul>
					{restaurants.map(function(restaurant){
						return (
							<li key={restaurant.id}>
                                <h3>{restaurant.name}</h3>
								<p>Address: {restaurant.address} {restaurant.city} {restaurant.state}</p>
								<p>Price: {restaurant.price}</p>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}
export default RestaurantList;