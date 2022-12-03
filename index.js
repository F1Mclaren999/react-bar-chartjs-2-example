import React, { Component } from 'react';
import { render } from 'react-dom';
import { Bar } from 'react-chartjs-2';
import './style.css';

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'November', 'December', 'September'];

const apiMockData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.random({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => Math.random({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(218, 239, 202, 0.8)',
    },
  ],
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Rendering',
      data: {},
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.loadDataFromApi();
    }, 1000);
  }

  loadDataFromApi = () => {
    this.setState({ data: apiMockData });
  };

  render() {
    return (
      <div id="main">
        <h3>Simple Charts, {this.state.name}</h3>
        <Bar data={this.state.data} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
