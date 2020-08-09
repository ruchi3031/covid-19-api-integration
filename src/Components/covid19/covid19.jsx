import React from 'react';
import ResultCard from './resultCard';
import CardDeck from 'react-bootstrap/CardDeck';

const CovidSummary=(props) => {
    const { Global } = props
        if (!Global) {
            return null
        }
        return (
            <div>
                <CardDeck>
                    <ResultCard title="New Confirmed" bg="secondary"
                        value={Global.NewConfirmed} />
                    <ResultCard title="Total Confirmed" bg="primary"
                        value={Global.TotalConfirmed} />
                    <ResultCard title="New Deaths" bg="warning"
                        value={Global.NewDeaths} />
                    <ResultCard title="Total Deaths" bg="danger"
                        value={Global.TotalDeaths} />
                    <ResultCard title="Total Recovered" bg="success"
                        value={Global.TotalRecovered} />
                    <ResultCard title="New Recovered" bg="light"
                        value={Global.NewRecovered} />
                </CardDeck>
            </div>
        );
}

export default CovidSummary;