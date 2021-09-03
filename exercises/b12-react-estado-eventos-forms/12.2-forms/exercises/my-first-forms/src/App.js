import './App.css';
import React from 'react';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      houseType: '',
    }
  }



  render () {
    return (
      <div className="App">
        <fieldset>
          <label htmlFor="">
            Name:
            <input />
          </label>
          <label htmlFor="">
            E-mail:
            <input />
          </label>
          <label htmlFor="">
            CPF:
            <input />
          </label>
          <label htmlFor="">
            Address:
            <input />
          </label>
          <label htmlFor="">
            City:
            <input />
          </label>
          <label htmlFor="">
            State:
            <input />
          </label>
          <label htmlFor="">
            House:
            <input />
          </label>
        </fieldset>

        <fieldset>

        </fieldset>
      </div>
    )
  }
}

export default App;
