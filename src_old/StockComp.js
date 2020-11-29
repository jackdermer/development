import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Card, ListGroupItem, ListGroup, Container } from 'react-bootstrap';


class StockComp extends React.Component {
    constructor(props) {
        super(props)
        this.name = this.props.list.name;
        this.stockPrice = this.props.list.stockPrice;
        this.perform = this.props.list.perform;
        this.sector = this.props.list.sector;
        this.tag = this.props.list.tag;
    }

    render() {
        return (
            <Card key={this.tag} className="stockCard">
                <Card.Body>
                    <Card.Title>{this.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.tag}</Card.Subtitle>
                    <Card.Text><b>Current Price: </b>${this.stockPrice}</Card.Text>
                    <Card.Text><b>Performance: </b>{this.perform}%</Card.Text>
                    <Card.Text><b>Sector: </b>{this.sector}</Card.Text>
                    <Card.Link>Purchase Stock</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}


export default StockComp;