import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/table.css';

import { Chart } from 'primereact/chart';

export default class CountryClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: props.Data
        }
        // this.loadChartData = this.loadChartData.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ chartData: nextProps.Data })
    }

    loadChartData=(CountryCode)=> {
        const CountryData = this.props.Countries.find(data=>data.CountryCode == CountryCode)
        const {TotalDeaths,TotalRecovered,TotalConfirmed} = CountryData
        const data = {
            labels: ['Total Deaths', 'Total Recovered', 'Total Confirmed'],
            datasets: [
                {
                    data: [TotalDeaths,TotalRecovered,TotalConfirmed],
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
        this.setState({ chartData: data })
    }

    render() {
        const { Countries } = this.props;
        const { chartData } = this.state;

        const listToDisplay = () => {

            if (Countries && Countries.length) {
                return Countries.map((element) => {
                    return <tr>
                        <td>{element.Country}</td>
                        <td>{element.NewConfirmed}</td>
                        <td>{element.TotalConfirmed}</td>
                        <td>{element.NewDeaths}</td>
                        <td>{element.TotalDeaths}</td>
                        <td>{element.NewRecovered}</td>
                        <td>{element.TotalRecovered}</td>
                        <td><button className="btn btn-primary"
                            onClick={()=>this.loadChartData(element.CountryCode)}>Details
                        </button></td>
                    </tr>
                });
            }
            else {
                return null
            }

        }
        return (
            <div className="row">
                <div className="col-8">

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>New Confirmed</th>
                                <th>Total Confirmed</th>
                                <th>New Deaths</th>
                                <th>Total Deaths</th>
                                <th>New Recovered</th>
                                <th>Total Recovered</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listToDisplay()}
                        </tbody>
                    </Table>
                </div>
                <div className="col-4">

                    <Chart type="pie" data={chartData} />


                </div>
            </div>
        )
    }
}
