// @flow
import React, { Component } from 'react';
import { fetchPeople } from './lib/api'
import './App.css';

export type PersonType = {
  name: string,
  age: number
}

export type PersonDetailedType = {
  name: string, 
  age: number, 
  description: string
}

export type APIError = {
  error: string
}

const Loader = ({isLoading}: {isLoading: bool}) => (
  <div>{isLoading && <h1>Loading...</h1>}</div>
)

const Error = ({error}: {error: ?APIError}) => (
  <div>
    {error && error.error}
  </div>
)

const Person = ({name, age}: { name: string, age: number }) => (
  <ul>
    <li>{name}</li>
    <li>{age}</li>
  </ul>
)

const People = (props : { people: Array<PersonType>}) => (
  <div>
    {props.people.map(p => <Person {...p} />)}
  </div>
)

class App extends Component {
  state: { people: Array<PersonType>, error: ?APIError, loading: boolean } = {
    people: [],
    error: null,
    loading: true
  }
  componentDidMount () {
    fetchPeople()
      .then(people => {
        this.setState({ people, loading: false })
      })
      .catch(error => {
        this.setState({ error, loading: false })
      })
  }
  render() {
    return (
      <div className="App">
        <Loader isLoading={this.state.loading} />
        <Error error={this.state.error} />
        <People people={this.state.people} />
      </div>
    );
  }
}

export default App;
