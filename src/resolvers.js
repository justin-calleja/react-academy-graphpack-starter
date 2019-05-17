import data from './data.json'

const resolvers = {
  Query: {
    articles: () => data.articles,
    users: () => data.users,
    greeting: (_parent, { name }) => name ? `Hello ${name}` : 'Hello world'
  }
};

export default resolvers;
