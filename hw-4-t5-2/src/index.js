import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Scooter(props) {
  return (
    <div className='card'>
      <h3>{props.scooter.name}</h3>
      <p>Остаток заряда: {props.scooter.charge}</p>
      <p>Стоимость в час: {props.scooter.price} руб.</p>
    </div>
  )
}

class App extends Component {
  state = {
    scooters: [
      {name: 'scooter 1', charge: '15%', price: 200},
      {name: 'scooter 2', charge: '75%', price: 300},
      {name: 'scooter 3', charge: '85%', price: 200},
      {name: 'scooter 4', charge: '100%', price: 150}
    ]
  }

  renderScooters() {
    return this.state.scooters.map(scooter => {
      return (
        <Scooter scooter={scooter}
        key={scooter.name + Math.random()} 
        />
      )
    })
  }

  render() {
    return (
      <div className="app">
        <div className="list">

        {this.renderScooters()}

        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))