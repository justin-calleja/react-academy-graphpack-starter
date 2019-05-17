import data from './data.json'

const resolvers = {
  Query: {
    articles: () => data.articles,
    users: () => data.users
  }
};

export default resolvers;
