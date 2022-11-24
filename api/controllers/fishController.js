const mongoose = require("mongoose");
const Fish = mongoose.model("Fish");

// Retrieve all products
exports.list_all_products = (req, res) => {
  if (Object.keys(req.query).length) {
    Fish.findOne({ name: req.query.name }, (err, fish) => {
      if (err) res.send(err);
      res.json(fish);
    });
  } else {
    Fish.find({}, (err, fish) => {
      if (err) res.send(err);
      res.json(fish);
    });
  }
};

// Create new fish
exports.create_new_fish = (req, res) => {
  // Validate data
  if (!req._body)
    res.status(500).send({ message: "Error while creating new fish." });
  else {
    // Create data base on model schema
    let new_fish = new Fish(req.body);
    new_fish.save((err, fish) => {
      if (err) res.send(err);
      res.json(fish);
    });
  }
};

// Retrieve fish by id
exports.read_product = (req, res) => {
  Fish.findById(req.params.fishID, (err, fish) => {
    if (err) res.send(err);
    res.json(fish);
  });
};

// Update fish by id
exports.update_product = (req, res) => {
  if (!req._body)
    res.status(500).send({ message: "Error while updating fish." });
  else {
    Fish.findByIdAndUpdate(req.params.fishID, req.body, (err, fish) => {
      if (err) res.send(err);
      res.send(`Updated fish ${req.params.fishID}`);
    });
  }
};

exports.remove_product = (req, res) => {
  Fish.deleteOne({ _id: req.params.fishID }, (err, fish) => {
    if (err) res.send(err);
    res.json({ message: "Fish successfully deleted" });
  });
};
