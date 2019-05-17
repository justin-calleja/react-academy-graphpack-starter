import data from "./data.json";

const resolvers = {
  Query: {
    articles: () => data.articles,
    users: () => data.users,
    greeting: (_parent, { name }) => (name ? `Hello ${name}` : "Hello world"),
    sum: (_parent, { numbers = [] } = {}) => {
      if (numbers && numbers.length > 0) {
        return numbers.reduce((acc, val) => {
          return acc + val;
        }, 0);
      }
      return 0;
    }
  }
};

export default resolvers;
