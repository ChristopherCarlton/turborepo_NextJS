import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
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

const images = [
    { id: '1', src: '/images/politics/P.png', category: 'politics', title: 'Politics Image' },
    { id: '2', src: '/images/trending/T.png', category: 'trending', title: 'Trending Image' },
    { id: '3', src: '/images/entertainment/E.png', category: 'entertainment', title: 'Entertainment Image' },
    { id: '4', src: '/images/cryptocurrency/C.png', category: 'cryptocurrency', title: 'Cryptocurrency Image' },
  ];


// Define resolvers
const resolvers = {
    Query: {
      // Resolver function for the getImages query
      getImages: (_, { category, sortBy }) => {
        // Filter images based on the selected category
        let filteredImages = images.filter((image) => image.category === category);
  
        // Sort images based on the optional sortBy parameter
        if (sortBy === 'title') {
          // Sort images by title
          filteredImages.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === 'id') {
          // Sort images by id (you can add additional sorting criteria as needed)
          filteredImages.sort((a, b) => a.id.localeCompare(b.id));
        }
  
        // Return the filtered and sorted images
        return filteredImages;
      },
    },
  };
  
  module.exports = resolvers;

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);
