// Define a placeholder array of images (you can replace this with actual data or fetch from a database)
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
  