import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import Properties from './properties'
import gql from 'graphql-tag'

class search extends Component {
  state = {
    properties: [],
    searchText: ''
  }

  render() {
    return (
      <div>
        <div>
          Search
          <input
            type='text'
            onChange={e => this.setState({ filter: e.target.value })}
          />
          <button onClick={() => this._executeSearch()}>OK</button>
        </div>
        {this.state.properties.map((property, index) => (
          <Properties key={property.id} property={property} index={index} />
        ))}
      </div>
    )
  }

  _executeSearch = async () => {
    const { searchText } = this.state
    const result = await this.props.client.query({
      query: PROPERTIES_QUERY,
      variables: { searchText }
    })
    const properties = result.data.property
    this.setState({properties})
  }

}

const PROPERTIES_QUERY = gql`
query PropertieQuery($searchText: String!){
  property(filter:{
    OR: [
      {street: $searchText},
      {city: $searchText},
      {state: $searchText},
      {zip: $searchText},
      {rent: $searchText}
    ]
  }) {
    id
    street
    city
    state
    zip
    rent
    owners{
      id
      firstName
      lastName
    }
  }
}`;

export default withApollo(search)
