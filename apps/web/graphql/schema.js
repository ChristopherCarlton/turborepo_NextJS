const { gql } = require('apollo-server');

// Define GraphQL schema
const typeDefs = gql`
  # Define the Image type
  type Image {
    id: ID!
    src: String!
    category: String!
    title: String
  }

  # Define the Query type
  type Query {
    # Fetch images based on category and optional sortBy parameter
    getImages(category: String!, sortBy: String): [Image!]!
  }
`;

module.exports = typeDefs;
