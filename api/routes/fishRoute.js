module.exports = (app) => {
  const fishController = require("../controllers/fishController");

  app
    .route("/api/fishes")
    .get(fishController.list_all_products)
    .post(fishController.create_new_fish);

  app
    .route("/api/fish/:fishID")
    .get(fishController.read_product)
    .patch(fishController.update_product)
    .delete(fishController.remove_product);
};
