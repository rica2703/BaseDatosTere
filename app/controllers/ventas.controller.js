const Tere = require("../models/ventas.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const Ventas = new Tere({
    codigo:req.body.codigo,
    productos: req.body.productos,
    total: req.body.total || false
  });

  // Save Tutorial in the database
  Tere.create(Ventas, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tere."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Tere.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Find a single Product by code
exports.findOne = (req, res) => {
  Tere.findById(req.params.codigo, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found TereBD with id ${req.params.codigo}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving TereBD with id " + req.params.codigo
        });
      }
    } else res.send(data);
  });
};

// find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tere.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Tere.updateByCodigo(
    req.params.codigo,
    new Tere(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found TereBD with codigo ${req.params.codigo}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating TereBD with codigo " + req.params.codigo
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a product with the specified code in the request
exports.delete = (req, res) => {
  Tere.remove(req.params.codigo, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found TereBD with id ${req.params.codigo}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete TereBD with user " + req.params.codigo
        });
      }
    } else res.send({ message: `TereBD was deleted successfully!` });
  });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tere.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({ message: `All TereBD were deleted successfully!` });
  });
};
