var router = require("express").Router();
var controller = require("./controller.js");

router
  .route("/item/:id")
  .get(controller.getData)
  .post(controller.addData)
  .delete(controller.deleteData)
  .put(controller.editData);

module.exports = router;
