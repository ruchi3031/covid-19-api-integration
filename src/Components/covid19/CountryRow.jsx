import React from 'react';

function CountryRow(props) {
    const {Country,NewConfirmed,TotalConfirmed,NewDeaths,TotalDeaths,NewRecovered,TotalRecovered} = props;
    return <tr>
        <td>{Country}</td>
        <td>{NewConfirmed}</td>
        <td>{TotalConfirmed}</td>
        <td>{NewDeaths}</td>
        <td>{TotalDeaths}</td>
        <td>{NewRecovered}</td>
        <td>{TotalRecovered}</td>

    </tr>;
}

export default CountryRow;