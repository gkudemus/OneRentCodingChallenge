import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import OwnerItem from './owneritem'

const OWNERS_QUERY = gql`
{
  owner(id: " "){
  	id
    firstName
    lastName
    properties{
    	id
    	street
    	city
    	state
    	zip
    	rent
    }
  }
}`;

export class properties extends Component {
  render() {
    return (
      <Fragment>
        <h1 style={{marginBottom: 30}}>Owners</h1>
        <Query query={OWNERS_QUERY}>
          {
            ({loading, error, data}) => {
              if(loading) return <h4>Loading...</h4>
              if(error) console.log(error);
              console.log(data)
              return <Fragment>{
                data.owner.map(owner => (
                  <OwnerItem key={owner.id} owner={owner}/>
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
