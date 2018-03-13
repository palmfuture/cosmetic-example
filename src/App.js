import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			product: {
				id: 1,
				amount: 10,
				price: 5
			},
			setProduct: this.setProduct.bind(this)
		}
	}

	setProduct = (product) => {
		this.setState({ product })
	}

	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" render={() => <HomePage {...this.state} />} />
					<Route path="/login" render={() => <LoginPage {...this.state} />} />
				</div>
			</Router>
		);
	}
}