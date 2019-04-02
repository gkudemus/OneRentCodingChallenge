import React from 'react'

export default function propertyItem({property:{id, street, city, state, zip, rent, owners}}){
  return <div className="card card-body mb-3">
    <div className="row">
      <div className="col-md-12">
        <h2>Property Details:</h2>
        <h4>Street: {street}</h4>
        <h4>City: {city}</h4>
        <h4>State: {state}</h4>
        <h4>Zip: {zip}</h4>
        <h4>Rent Cost: {rent}</h4>
        <h4>Owner: {owners.firstName} {owners.lastName}</h4>
      </div>
    </div>
  </div>;

}
