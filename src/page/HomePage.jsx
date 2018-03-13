import React, { Component } from 'react';
import { Fade, Button } from 'reactstrap';
import Navbar from '../component/Navbar';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.product.id
        }
    }

    componentWillReceiveProps = (next) => {
        this.setState({ id: next.product.id });
    }

    onChangeProduct = () => {
        const product = {
            id: 10,
            amount: 10,
            price: 5
        }
        this.props.setProduct(product);
    }

    render() {
        return (
            <div>
                <Navbar {...this.props} />
                <br /><br /><br />
                <Fade tag='h1'>
                    Home {this.state.id}
                </Fade>
                <Button color='danger' onClick={this.onChangeProduct}>Clear</Button>
            </div>
        )
    }
}
