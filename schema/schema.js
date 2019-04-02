const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} = graphql;

const OwnerType = new GraphQLObjectType({
  name: 'Owner',
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    properties: {
      type: new GraphQLList(PropertyType),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/owners/${parentValue.id}/properties`)
          .then(res => res.data)
      }
    }
  })
});

const PropertyType = new GraphQLObjectType({
  name: 'Property',
  fields: () => ({
    id: { type: GraphQLString },
    street: { type: GraphQLString },
    city: { type: GraphQLString },
    state: {type: GraphQLString },
    zip: { type: GraphQLString },
    rent: { type: GraphQLInt},
    owners: {
      type: OwnerType,
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/owners/${parentValue.ownerId}`)
          .then(res => res.data);
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    property: {
      type: new GraphQLList(PropertyType),
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/properties/${args.id}`)
          .then(resp => resp.data);
      }
    },
    owner: {
      type: new GraphQLList(OwnerType),
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/owners/${args.id}`)
          .then(resp => resp.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
