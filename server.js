
const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
const cors = require('cors');

//Allow cross-origin

app.use(cors());

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
  console.log('listening...')
});
