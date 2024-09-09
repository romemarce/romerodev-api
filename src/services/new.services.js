async function serviceGetNews(category = "general") {
  let articles = [];
  const posts = require(`../data/news/${category}.json`);

  articles.push(posts);

  const data = { articles };
  return data;
}

module.exports = serviceGetNews;
