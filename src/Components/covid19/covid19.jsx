import React, { Component } from 'react';

const url = "https://api.covid19api.com/summary";

class CovidSummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            CovidData:{
                Global:{
                    NewConfirmed:0,
                    TotalConfirmed:0,
                    NewDeaths:0,
                    TotalDeaths:0,
                    NewRecovered:0,
                    TotalRecovered:0
                },
                Countries:[]
            }
        };
    }
    componentWillMount(){
        fetch(url)
            .then(res=>res.json())
                .then(resJson=>{
                    this.setState({CovidData:resJson});
                    console.log(resJson);
                    console.log(this.state.CovidData.Countries);
                })
    }
    render() {
        return (
            <div>
                <div>

                    <h1>{this.state.CovidData.Global.TotalConfirmed}</h1>
                    <h3>Total Confirmed</h3>

                </div>
                
                <div>

                    <h1>{this.state.CovidData.Global.TotalDeaths}</h1>
                    <h3>Total Deaths</h3>

                </div>
            </div>
        );
    }

}

export default CovidSummary;