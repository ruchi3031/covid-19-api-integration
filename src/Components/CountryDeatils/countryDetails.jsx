import React, { Component } from 'react'
import DataTable, { createTheme } from 'react-data-table-component';

createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#fffff',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    button: {
      default: '#2aa198',
      hover: 'rgba(0,0,0,.08)',
      focus: 'rgba(255,255,255,.12)',
      disabled: 'rgba(255, 255, 255, .34)',
    },
    sortFocus: {
      default: '#2aa198',
    },
  });
  
let data = [
    {
        name: "Afghanistan",
        alpha2Code: "AF",
        capital:'Kabul',
        area: 652230,
        population: 27657145
    },
    {
        name: "India",
        alpha2Code: "IN",
        capital:'New Delhi',
        area: 3287590,
        population: 1295210000
    },
    {
        name: "United States of America",
        alpha2Code: "USA",
        capital:'Washington, D.C.',
        area: 9629091,
        population: 323947000
    },
    {
        name: "China",
        alpha2Code: "CN",
        capital:'Beijing',
        area: 9640011,
        population: 1377422166
    },
    {
        name: "Iran (Islamic Republic of)",
        alpha2Code: "IR",
        capital:'Tehran',
        area: 1648195,
        population: 7936990
    },
    {
        name: "Ukraine",
        alpha2Code: "UA",
        capital:'Kiev',
        area: 603700,
        population: 42692393
    },
    {
        name: "United Arab Emirates",
        alpha2Code: "AE",
        capital:'Abu Dhabi',
        area: 83600,
        population: 9856000
    },
    {
        name: "Viet Nam",
        alpha2Code: "VN",
        capital:'Hanoi',
        area: 331212,
        population: 92700000
    },
    {
        name: "Zambia",
        alpha2Code: "ZM",
        capital:'Lusaka',
        area: 752612,
        population: 15933883
    },
    {
      name: "Bahamas",
      alpha2Code: "BS",
      capital:'Nassau',
      area: 13943,
      population: 378040
  },
  {
    name: "Canada",
    alpha2Code: "CA",
    capital:'Ottawa',
    area: 9984670,
    population: 36155487
  },
  {
    name: "Egypt",
    alpha2Code: "EG",
    capital:'Cairo',
    area: 1002450,
    population: 91290000
  },
  {
    name: "Denmark",
    alpha2Code: "DK",
    capital:'Copenhagen',
    area: 43094,
    population: 5717014
  }
];

const columns = [
    {
        name: 'Country Name',
        selector: 'name',
        sortable: true,
      },
      {
        name: 'Area Code',
        selector: 'alpha2Code',
        sortable: true,
      },
      {
        name: 'Capital',
        selector: 'capital',
        sortable: true,
      },
      {
        name: 'Area',
        selector: 'area',
        sortable: true,
      },
      {
        name: 'Total Population',
        selector: 'population',
        sortable: true,
      }
];
export default class CountryDetails extends Component {
    render() {
        return (
            <div>
                <DataTable
                columns={columns}
                data={data}
                theme="solarized"
                pagination
                fixedHeader
                ></DataTable>

            </div>
        )
    }
}
