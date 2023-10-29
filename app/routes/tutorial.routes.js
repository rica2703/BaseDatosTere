module.exports = app => {
  const tereBD = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tereBD.create);

  // Retrieve all Tutorials
  router.get("/", tereBD.findAll);

  // Retrieve all USERS
  router.get("/usuario", tereBD.findAllPublished);

  // Retrieve a single user with id
  router.get("/:usuario", tereBD.findOne);

  // Update a Tutorial with id
  router.put("/:usuario", tereBD.update);

  // Delete a Tutorial with id
  router.delete("/:usuario", tereBD.delete);

  // Delete all Tutorials
  router.delete("/", tereBD.deleteAll);

  app.use('/api/usuarios', router);
};
