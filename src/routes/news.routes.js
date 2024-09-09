/*
  Rutas de News
  host + /news
*/
const { Router } = require("express");
const router = Router();

const  { controllerGetNews } = require("../controllers/news.controller")

router.post("/news", controllerGetNews); //funcion
module.exports = router;