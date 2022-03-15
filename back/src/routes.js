const { Router } = require("express");
const FoundController = require("./controller/FoundController");
const SearchController = require("./controller/SearchController");

const routes = Router();

routes.get("/founds", FoundController.index);
routes.get("/founds/:_id", FoundController.index);
routes.post("/founds", FoundController.store);
routes.put("/founds", FoundController.update);
routes.delete("/founds/:_id", FoundController.destroy);

routes.get("/search", SearchController.index);

module.exports = routes;
