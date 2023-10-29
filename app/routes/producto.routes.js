module.exports = app2 => {
  const tereBD = require("../controllers/productos.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tereBD.create);

  // Retrieve all Tutorials
  router.get("/", tereBD.findAll);

  // Retrieve all USERS
  router.get("/codigo", tereBD.findAllPublished);

  // Retrieve a single user with id
  router.get("/:codigo", tereBD.findOne);

  // Update a Tutorial with id
  router.put("/:codigo", tereBD.update);

  // Delete a Tutorial with id
  router.delete("/:codigo", tereBD.delete);

  // Delete all Tutorials
  router.delete("/", tereBD.deleteAll);

  app2.use('/api/productos', router);
};
