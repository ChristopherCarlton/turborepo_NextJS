const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema'); // Import the GraphQL schema
const resolvers = require('./resolvers'); // Import the GraphQL resolvers

// Create an instance of Apollo Server
const server = new ApolloServer({
  typeDefs, // Pass the GraphQL schema
  resolvers, // Pass the GraphQL resolvers
  // You can add additional configurations here if needed
});

// Start the Apollo Server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
