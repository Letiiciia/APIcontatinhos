const express = require("express");
const router = express.Router();
const controller = require("../controller/contatosContoller");


router.get("/", controller.getAll);
router.post("/criar", controller.addContato);
router.get("/nome/:nome", controller.getContatoPorNome);
router.get("/id/:id", controller.getContatoById);


module.exports = router;