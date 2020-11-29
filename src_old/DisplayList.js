import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './index.css';
import CartComp from './CartComp'

class DisplayList extends React.Component {

    constructor(props) {
        super(props)
    }

    //This method allows for information in DisplayList to be passed up to FilteredList. Specifically, when a button
    //is selected in one of the cards, this function tells filtered list to add it to cart.
    sub_callback(item) {
        this.props.callback(item)
    }

    //renders the cards in the "Find Stocks" section. Each card is identical in format, but varies on the detailed
    //information.
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                {this.props.list.map(curr =>
                    <CartComp item={curr} callback={this.sub_callback.bind(this)}/>
                )}
                </Row>
            </Container>
        )
    }
}

export default DisplayList;