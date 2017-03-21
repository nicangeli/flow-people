// @flow
import React, { Component } from 'react'
import type { PersonDetailedType } from './App'
import { fetchPerson } from './lib/api'

type Loading = {
    loading: true
}
type Loaded = {
    loading: false,
    person: PersonDetailedType
}

type AppState = { state: Loading | Loaded }

class Person extends Component<any, any, AppState> {
    state: AppState
    constructor (props: any) {
        super(props)
        this.state = { state: {loading: true }}
    }
    componentDidMount () {
        const { match: { params: { id }}} = this.props
        fetchPerson(id)
            .then(person => {
                this.setState({state: {loading: false, person}})
            })
        
    }
    render () {
        if (this.state.state.loading) {
            return <h1>Loading</h1>
        }
        return (
            <div>
                <h1>Person {this.state.state.person.name}</h1>
                <p>Person {this.state.state.person.description}</p>
            </div>
        )
    }
}

export default Person