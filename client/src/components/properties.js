import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PropertyItem from './propertyItem'

const PROPERTIES_QUERY = gql`
{
  property(id:" "){
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

export class properties extends Component {
  render() {
    return (
      <Fragment>
        <h1 style={{marginBottom: 30}}>Properties</h1>
        <Query query={PROPERTIES_QUERY}>
          {
            ({loading, error, data}) => {
              if(loading) return <h4>Loading...</h4>
              if(error) console.log(error);
              console.log(data)
              return <Fragment>{
                data.property.map(property => (
                  <PropertyItem key={property.id} property={property}/>
                ))
              }
              </Fragment>;

            }
          }
        </Query>
      </Fragment>
    );
  }
}

export default properties;
