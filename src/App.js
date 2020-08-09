import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import CovidSummary from './Components/covid19/covid19';
import DetailTable from './Components/covid19/Country';
import './Components/css/covid.css';


const url = "https://api.covid19api.com/summary";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      covidData: {

      }
    };
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ 'covidData': data }))
  }

  render() {
    const { Global,Countries } = this.state.covidData
    return (
      <Container>
        <h1>Dashboard</h1>
        <CovidSummary Global={Global} />
        <br/>
        <DetailTable Countries={Countries} />
      </Container>
    );
  }


}

export default App;
