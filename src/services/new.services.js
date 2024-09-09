async function serviceGetNews(category = "general") {
  const posts = require(`../data/news/${category}.json`);
  return posts.articles;
}

module.exports = serviceGetNews;
