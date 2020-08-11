import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/table.css';

import {Chart} from 'primereact/chart';

const DetailTable = (props) => {
    const { Countries, Data } = props;  
    var data = Data;
  
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
                    >Details
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

            <Chart type="pie" data={data} />


            </div>
        </div>
    )
}

export default DetailTable