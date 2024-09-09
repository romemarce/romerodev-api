const serviceGetNews = require("../services/new.services");
const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];
require("dotenv").config();

const controllerGetNews = async (req, res) => {
  try {
    let category = req.body.category;

    if (categories.includes(category) || category === "") {
      const result = await serviceGetNews(category);

      res.setHeader("Content-Type", "application/json");
      
      res.status(200).send(JSON.stringify(result));
    }else{
      res.setHeader("Content-Type", "application/json");
      res.status(401).send(
        JSON.stringify({
          message: "Categoria invalida",
          categories
        })
      );
    }
  } catch (error) {
    res.status(400).send(
      JSON.stringify({
        error,
        message: "Error al obtener noticias.",
      })
    );
  }
};

module.exports = {
  controllerGetNews,
};
