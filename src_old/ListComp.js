import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './index.css';

class DisplayList extends React.Component {

    constructor(props) {
        super(props)
    }

    //This method allows for information in DisplayList to be passed up to FilteredList. Specifically, when a button
    //is selected in one of the cards, this function tells filtered list to add it to cart.
    addToCartDisp(item) {
        this.props.callback(item)
    }

    //renders the cards in the "Find Stocks" section. Each card is identical in format, but varies on the detailed
    //information.
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                {this.props.list.map(item => 
                    <Card key={item.tag} className="stockCard">
                        <Card.Img variant="top" src={item.image} className="imageCard"/>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{item.tag}</Card.Subtitle>
                            <Card.Text><b>Current Price: </b>${item.stockPrice}</Card.Text>
                            <Card.Text><b>Performance: </b>{item.perform}%</Card.Text>
                            <Card.Text><b>Sector: </b>{item.sector}</Card.Text>
                            <Button variant="success" onClick={() => this.addToCartDisp(item)}>Purchase Stock</Button>
                        </Card.Body>
                    </Card>
                )}
                </Row>
            </Container>
        )
    }
}

export default DisplayList;