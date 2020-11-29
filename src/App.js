import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilteredList from './FilteredList'

import AA from './data/AA.jpg'
import Adobe from './data/Adobe.jpeg'
import Apple from './data/Apple.png'
import Chipotle from './data/Chipotle.png'
import Delta from './data/Delta.png'
import Dominos from './data/Dominos.jpg'
import Jetblue from './data/Jetblue.png'
import Mcd from './data/Mcd.png'
import Microsoft from './data/Microsoft.png'
import Sams from './data/Sams.png'
import Star from './data/Star.png'
import United from './data/United.png'

import { AwesomeButton } from "react-awesome-button";
import { Dropdown } from 'react-bootstrap';
import "react-awesome-button/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const stocks = [
      {name: "Apple Inc.", tag: "AAPL", stockPrice: 100.24, perform: 2.8, sector: "Technology", image: Apple, numCart: 1},
      {name: "Microsoft Corperation", tag: "MFST", stockPrice: 80.16, perform: -5.4, sector: "Technology", image: Microsoft, numCart: 1},
      {name: "Adobe Inc.", tag: "ADBE", stockPrice: 55.91, perform: 0.2, sector: "Technology", image: Adobe, numCart: 1},
      {name: "Samsung Electronics Co.", tag: "SMSN", stockPrice: 55.15, perform: 2.0, sector: "Technology", image: Sams, numCart: 1},
      {name: "Delta", tag: "DAL", stockPrice: 35.44, perform: -3.2, sector: "Airline", image: Delta, numCart: 1},
      {name: "JetBlue", tag: "JBLU", stockPrice: 15.76, perform: 1.3, sector: "Airline", image: Jetblue, numCart: 1},
      {name: "American Airlines", tag: "AAL", stockPrice: 15.56, perform: -4.2, sector: "Airline", image: AA, numCart: 1},
      {name: "United Airlines", tag: "UAL", stockPrice: 21.87, perform: -0.2, sector: "Airline", image: United, numCart: 1},
      {name: "Starbucks Corporation", tag: "SBUX", stockPrice: 1.50, perform: -0.5, sector: "Food", image: Star, numCart: 1},
      {name: "McDonald's Corporation", tag: "MCD", stockPrice: 35.00, perform: -1.3, sector: "Food", image: Mcd, numCart: 1},
      {name: "Domino’s Pizza Inc", tag: "DPZ", stockPrice: 17.00, perform: 1.0, sector: "Food", image: Dominos, numCart: 1},
      {name: "Chipotle Mexican Grill Inc", tag: "CMG", stockPrice: 15.00, perform: 6.8, sector: "Food", image: Chipotle, numCart: 1},
    ];
    

    return (
      <div>
        <FilteredList list={stocks} />
      </div>
    )
  }
}

export default App;