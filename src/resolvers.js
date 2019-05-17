import data from "./data.js";

const resolvers = {
  Query: {
    // articles: () => data.articles,
    articles: (parent, { search }) =>
      search
        ? data.articles.filter(article => article.title.includes(search))
        : data.articles,
    users: (_parent, { limit }) => {
      if (limit && limit > 0) {
        let res = [];
        for (let i = 0; i < limit; i++) {
          res.push(data.users[i]);
        }
        return res;
      }
      return data.users;
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
  },
  User: {
    articles: parent => {
      console.log("in here:", parent);

      return data.articles.filter(article => article.id === parent.id);
    }

    // articles: (parent, arg) => {
    //   console.log("parent:", parent);
    //   console.log("arg:", arg);
    //   return {
    //     id: 1,
    //     name: "Kristijan",
    //     email: "becky@gmail.com",
    //     articleIds: ["1"]
    //   };
    // }
  }
};

export default resolvers;
