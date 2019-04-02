import React from 'react'


// margin-left: auto;
// margin-right: auto;
// max-width: 1000px;
// float: none;

export default function propertyItem({owner:{firstName, lastName, properties}}){
  return <div className="card card-body mb-3">
    <div className="row">
      <div className="col-md-12">
        <h2>Owner Details:</h2>
        <h4>Owner: {firstName} {lastName}</h4>
        <h4>Properties:</h4>
        <hr />
        {properties.map((ownedProperty, idx) => (
          <table key={ownedProperty.id} style={{marginRight: 'auto', marginLeft: 'auto', maxWidth: 1000, float: 'none', marginTop: 30 }}>
            <tbody>
              <tr>
                <td>
                  Property {idx+1}:
                </td>
              </tr>
              <tr>
                <td>Street: {ownedProperty.street}</td>
              </tr>
              <tr>
                <td>City: {ownedProperty.city}</td>
              </tr>
              <tr>
                <td>State: {ownedProperty.state}</td>
              </tr>
              <tr>
                <td>Zip: {ownedProperty.zip}</td>
              </tr>
              <tr>
                <td>Rent Cost: ${ownedProperty.rent}</td>
              </tr>
            </tbody>
          </table>
        ))
        }
      </div>
    </div>
  </div>;

}
