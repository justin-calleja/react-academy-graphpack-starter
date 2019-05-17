import data from "./data.json";

const resolvers = {
  Query: {
    articles: () => data.articles,
    users: (_parent, { limit }) => {
      if (limit && limit > 0) {
        let res = []
        for (let i = 0; i < limit; i++) {
          res.push(data.users[i])
        }
        return res
      }
      return data.users
    },
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
