import data from "./data";

const resolvers = {
  Query: {
    hello: () => "Hello World!! 👋",
    articles: (parent, { search }) => {
      if (search) {
        const { text = "", tags = [] } = search;

        return data.articles.filter(article => {
          const includesSearch = article.title
            .toLowerCase()
            .includes(text.toLowerCase());

          const hasCorrectTags = tags.every(tag =>
            article.tags.some(articleTag => articleTag === tag)
          );

          return includesSearch && hasCorrectTags;
        });
      }
      return data.articles;
    },
    users: (parent, { limit }) =>
      limit ? data.users.slice(0, limit) : data.users,
    greeting: (parent, { name }) => `Hello ${name || "World"}`,
    sum: (parent, { numbers }) =>
      numbers.reduce((accum, num) => (accum += num), 0)
  },
  User: {
    articles: parent =>
      data.articles.filter(article => article.id === parent.id)
  },
  Article: {
    author: parent => data.users.find(user => user.id === parent.author),
    tags: parent => {
      return data.tags.filter(tag => parent.tags.includes(tag.id))
    }
  }
};

export default resolvers;
