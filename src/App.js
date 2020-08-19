import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import CovidSummary from './Components/covid19/covid19';

import './Components/css/covid.css';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import DisplayTable from './Components/table/showtable';

import { 
	BrowserRouter as Router,  
	Link,
  Route,  
} from 'react-router-dom'; 
import CountryDetails from './Components/CountryDeatils/countryDetails';



const url = "https://api.covid19api.com/summary";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      covidData: {
        Global: {
          NewConfirmed: 0,
          TotalConfirmed: 0,
          NewDeaths: 0,
          TotalDeaths: 0,
          NewRecovered: 0,
          TotalRecovered: 0,
          CountryCode : 0
          }
      }
    };
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(data => 
        {this.setState({ 'covidData': data })
      
      
      console.log(this.state.covidData.Global);
      })
  }

  render() {
    const { Global,Countries } = this.state.covidData;

    const data = {
      labels: ['Total Deaths','Total Recovered','Total Confirmed'],
      datasets: [
          {
              data: [Global.TotalDeaths, Global.TotalRecovered, Global.TotalConfirmed],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      };

  
    return (
      <Container fluid>
        <h1>Dashboard</h1>
        <CovidSummary Global={Global} />
        <br/>
        <Router>
          <Link to="/">
            <button>Covid Data</button>
          </Link>
          <Link to="/CountryDetail">
            <button>Country Detail</button>
          </Link>
          <Route exact path='/' component={DisplayTable} Countries={Countries} Data={data}/>
          <Route exact path='/CountryDetail' component={CountryDetails}/>
          </Router>
      </Container>
    );
  }


}
export default App;
