import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './index.css';

class DisplayCart extends React.Component {

    constructor(props) {
        super(props)
    }

    //This method allows for information in DisplayCart to be passed up to FilteredList. Specifically, when a button
    //is selected in one of the cards, this function tells filtered list to remove it from the cart.
    removeFromCart(item) {
        this.props.callback(item)
    }

    //renders the "Your Cart" section
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                {this.props.cart.map(item => 
                    <Card key={item.tag} className="stockCard">
                    <Card.Img variant="top" src={item.image} className="imageCard"/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item.tag}</Card.Subtitle>
                        <Card.Text><b>Current Price: </b>${item.stockPrice}</Card.Text>
                        <Card.Text><b>Performance: </b>{item.perform}%</Card.Text>
                        <Card.Text><b>Sector: </b>{item.sector}</Card.Text>
                        <Card.Text><b>Number of Stocks: </b>{item.numCart}</Card.Text>
                        <Button variant="link" onClick={() => this.removeFromCart(item)}>Remove from Cart</Button>
                    </Card.Body>
                </Card>
                )}
                </Row>
            </Container>
        )
    }
}

export default DisplayCart;