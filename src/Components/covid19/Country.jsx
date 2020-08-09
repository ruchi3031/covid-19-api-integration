import React from 'react';
import { Table } from 'react-bootstrap';
import CountryRow from './CountryRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/table.css';

const DetailTable = (props) => {
    const listToDisplay = () => {
        const { Countries } = props
        if (Countries && Countries.length) {
            return Countries.map((element) => {
                return <CountryRow Country={element.Country}
                    NewConfirmed={element.NewConfirmed}
                    TotalConfirmed={element.TotalConfirmed}
                    NewDeaths={element.NewDeaths}
                    TotalDeaths={element.TotalDeaths}
                    NewRecovered={element.NewRecovered}
                    TotalRecovered={element.TotalRecovered}
                />
            });
        }
        else {
            return null
        }
    }
    return (
        <div>
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
                    </tr>
                </thead>
                <tbody>
                    {listToDisplay()}
                </tbody>
            </Table>
        </div>
    )
}

export default DetailTable