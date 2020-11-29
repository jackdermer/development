import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Dropdown, NavItem } from 'react-bootstrap';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, ButtonGroup, DropdownButton, Row } from 'react-bootstrap';
import DisplayList from './DisplayList.js'
import DisplayCart from './DisplayCart.js'
import './index.css';

class FilteredList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sector: "All",
            perform: "All",
            sort: "Name",
            cart: []
        };
    }

    //Adds an item to the cart
    addToCart(item) {
        let inCart = false;
        let index = 0;
        for(let i = 0; i < this.state.cart.length; i++) {
            if(this.state.cart[i].tag === item.tag) {
                inCart = true
                index = i
            }
        }
        if(inCart) {
            console.log(this.state.cart[index])
            this.state.cart[index].numCart += 1
            this.setState ({
                cart: this.state.cart
            })

        } else {
            this.state.cart.push(item)
            this.setState ({
            cart: this.state.cart
        })

        }
    }

    //removes item from the cart
    removeFromCart(item) {
        let index = 0
        for(let i = 0; i < this.state.cart.length; i++) {
            if(this.state.cart[i].tag === item.tag) {
                index = i
            }
        }

        if(item.numCart > 1) {
            this.state.cart[index].numCart -= 1
        } else {
            this.state.cart.splice(index, 1)
        }

        this.setState ({
            cart: this.state.cart
        })
    }

    //updates the filter value for the "Sector" field
    onSelectFilterSector = event => {
        this.setState ({
            sector: event
        })
    };

    //updates the filter value for the "Performance" field
    onSelectFilterPerform = event => {
        this.setState ({
            perform: event
        })
    };

    //updates the sort value so the site can reorder items
    onSelectSort = event => {
        this.setState ({
            sort: event
        })
    };

    //compares an item's sector with the filter's sector. If they are the same the item is displayed.
    matchesFilterSector = item =>  {
        if(this.state.sector === "All") { 
            return true
        } else if (this.state.sector === item.sector) {
            return true
        } else {
            return false
        }
    }

    //compares the sign of an item's performance with the filter's. If they are the same sign the item is displayed.
    matchesFilterPerform = item =>  {
        if(this.state.perform === "All") { 
            return true
        } else if (this.state.perform === "Positive") {
            if(item.perform > 0) {
                return true
            } else {
                return false
            }
        } else if(this.state.perform === "Negative") {
            if(item.perform > 0) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }


    //performs the sorting in alphabetical order
    matchesSortName(a,b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    };

    //performs the sorting from lowest stock price to highest stock price
    matchesSortPrice1(a, b) {
        return a.stockPrice - b.stockPrice; 
    }

    //performs the sorting from highest stock price to lowest stock price
    matchesSortPrice2(a, b) {
        return b.stockPrice - a.stockPrice; 
    }

    //the main method for applying all the filters and sorting to the set of items.
    displayMe(myList) {
        myList = myList.filter(this.matchesFilterSector)
        myList = myList.filter(this.matchesFilterPerform)
        if(this.state.sort === "Name") {
            return myList.sort(this.matchesSortName)
        }
        else if(this.state.sort === "Price1") {
            return myList.sort(this.matchesSortPrice1)
        }
        else if(this.state.sort === "Price2") {
            return myList.sort(this.matchesSortPrice2)
        }
        else{
            return myList
        }
    }

    //aggregates the total stock price for all the stocks in the cart
    sumCart() {
        let sum = 0
        for(let i = 0; i < this.state.cart.length; i++) {
            sum += (this.state.cart[i].numCart) * this.state.cart[i].stockPrice
        }

        return sum.toFixed(2)
    }

    //alerts the user that they have successfully checked out and how much their total was
    checkout(sum) {
        alert("Checkout Complete! Your total was $" + sum)
    }

    //renders the "Find Stocks" section and the "Your Cart" section with full functionality
    render() {
        return (
            <div>

            <Navbar className="sticky-top justify-content-end" expand="sm">
                <Nav variant="pills" className="justify-content-end" defaultActiveKey="#cart">
                    <Nav.Link className="myNav" href="#cart">Go To Cart</Nav.Link>
                </Nav>
            </Navbar>


            <h3 id="find"><b>Find Stocks</b></h3>
            <hr/>

            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Sector</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link eventKey="All" onSelect={this.onSelectFilterSector}>All</Nav.Link>
                        <Nav.Link eventKey="Food" onSelect={this.onSelectFilterSector}>Food</Nav.Link>
                        <Nav.Link eventKey="Technology" onSelect={this.onSelectFilterSector}>Technology</Nav.Link>
                        <Nav.Link eventKey="Airline" onSelect={this.onSelectFilterSector}>Airline</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Performance</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link eventKey="All" onSelect={this.onSelectFilterPerform}>All</Nav.Link>
                        <Nav.Link eventKey="Positive" onSelect={this.onSelectFilterPerform}>Positive</Nav.Link>
                        <Nav.Link eventKey="Negative" onSelect={this.onSelectFilterPerform}>Negative</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Navbar bg="light" expand="lg">
                <Nav className="mr-auto">
                    <NavDropdown title="Sort By" id="sort_by" class="dropdown-toggle nav-link">
                        <NavDropdown.Item eventKey="Name" onSelect={this.onSelectSort}>Name (A to Z)</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="Price2" onSelect={this.onSelectSort}>Price (Highest to Lowest)</NavDropdown.Item>
                        <NavDropdown.Item eventKey="Price1" onSelect={this.onSelectSort}>Price (Lowest to Highest)</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>

            <DisplayList list={this.displayMe(this.props.list)} callback={this.addToCart.bind(this)}/> 

            <h3 id="cart"><b>Your Cart</b></h3>
            <hr/>
            <h3><i>Cart Total: ${this.sumCart()}</i></h3>

            <DisplayCart cart={this.state.cart} callback={this.removeFromCart.bind(this)}/>

            <Container>
                <Row className="justify-content-md-center">
                    <Button size="lg" variant="success" onClick={() => this.checkout(this.sumCart())}>Purchase Stocks</Button>
                </Row>
            </Container>
            </div>
        )
    }
}

export default FilteredList;